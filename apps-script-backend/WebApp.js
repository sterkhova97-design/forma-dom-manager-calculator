/* Forma Dom — WebApp.js
   Замените текущий WebApp.js этим файлом и разверните как Web App:
   Execute as: Me / Who has access: Anyone.
*/
function doGet(e) {
  e = e || { parameter: {} };
  const action = String((e.parameter || {}).action || '');
  if (action === 'history_list') return fdHistoryJsonp_(e, fdHistoryList_());
  if (action === 'history_get') return fdHistoryJsonp_(e, fdHistoryGet_(String(e.parameter.id || '')));

  const template = HtmlService.createTemplateFromFile('KpForm');
  template.logoDataUrl = getLogoBase64_();
  template.finalLogoDataUrl = getFinalLogoBase64_();
  template.initialKpId = '';
  return template.evaluate().setTitle('Forma Dom — формирование КП').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    const data = JSON.parse(String(e && e.postData && e.postData.contents || '{}'));
    if (data.action === 'history_save') {
      return fdHistoryJson_(fdHistorySave_(data.snapshot || {}));
    }
    return fdHistoryJson_({ ok:false, error:'Неизвестное действие' });
  } catch (err) {
    return fdHistoryJson_({ ok:false, error:String(err && err.message || err) });
  }
}

function fdHistorySheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('КП_HTML');
  if (!sh) sh = ss.insertSheet('КП_HTML');
  const headers = ['kp_id','created_at','updated_at','client_name','manager','total_sum','snapshot_json'];
  if (sh.getLastRow() === 0) sh.getRange(1,1,1,headers.length).setValues([headers]);
  return sh;
}

function fdHistoryList_() {
  const sh = fdHistorySheet_();
  if (sh.getLastRow() < 2) return { ok:true, items:[] };
  const rows = sh.getRange(2,1,sh.getLastRow()-1,7).getValues();
  const tz = Session.getScriptTimeZone();
  const items = rows.filter(r=>String(r[0]||'').trim()).map(r=>({
    id:String(r[0]||''),
    createdAt:r[1] instanceof Date ? r[1].toISOString() : String(r[1]||''),
    updatedAt:r[2] instanceof Date ? r[2].toISOString() : String(r[2]||''),
    clientName:String(r[3]||''), manager:String(r[4]||''), grand:Number(r[5]||0)
  })).sort((a,b)=>String(b.updatedAt).localeCompare(String(a.updatedAt)));
  return { ok:true, items:items };
}

function fdHistoryGet_(id) {
  id = String(id||'').trim();
  if (!id) return { ok:false, error:'Не передан id' };
  const sh = fdHistorySheet_();
  if (sh.getLastRow() < 2) return { ok:false, error:'КП не найдено' };
  const rows = sh.getRange(2,1,sh.getLastRow()-1,7).getValues();
  const row = rows.find(r=>String(r[0]||'')===id);
  if (!row) return { ok:false, error:'КП не найдено' };
  const snapshot = JSON.parse(String(row[6]||'{}'));
  fdRestoreSnapshotImages_(snapshot);
  return { ok:true, snapshot:snapshot };
}

function fdHistorySave_(snapshot) {
  if (!snapshot || !snapshot.id) throw new Error('Нет id КП');
  const sh = fdHistorySheet_();
  const now = new Date();
  const copy = JSON.parse(JSON.stringify(snapshot));
  fdStoreSnapshotImages_(copy);
  const last = sh.getLastRow();
  let rowNum = 0;
  if (last >= 2) {
    const ids = sh.getRange(2,1,last-1,1).getValues().flat().map(String);
    const idx = ids.indexOf(String(copy.id));
    if (idx >= 0) rowNum = idx + 2;
  }
  let created = copy.createdAt ? new Date(copy.createdAt) : now;
  if (rowNum) {
    const oldCreated = sh.getRange(rowNum,2).getValue();
    if (oldCreated instanceof Date) created = oldCreated;
  }
  copy.createdAt = created.toISOString();
  copy.updatedAt = now.toISOString();
  const row = [copy.id,created,now,String(copy.header && copy.header.clientName || ''),String(copy.header && copy.header.manager || ''),Number(copy.totals && copy.totals.grand || 0),JSON.stringify(copy)];
  if (rowNum) sh.getRange(rowNum,1,1,row.length).setValues([row]); else sh.appendRow(row);
  return { ok:true, id:copy.id, createdAt:copy.createdAt, updatedAt:copy.updatedAt };
}

function fdStoreSnapshotImages_(snapshot) {
  (snapshot.items || []).forEach(function(item, idx){
    const img = item && item.image;
    if (!img || !img.dataUrl || String(img.dataUrl).indexOf('data:image/') !== 0) return;
    const fileId = fdSaveDataUrlImage_(img.dataUrl, snapshot.id + '_' + String(idx+1));
    img.driveFileId = fileId;
    img.dataUrl = '';
  });
}

function fdRestoreSnapshotImages_(snapshot) {
  (snapshot.items || []).forEach(function(item){
    const img = item && item.image;
    if (!img || !img.driveFileId || img.dataUrl) return;
    try {
      const blob = DriveApp.getFileById(img.driveFileId).getBlob();
      img.dataUrl = 'data:' + blob.getContentType() + ';base64,' + Utilities.base64Encode(blob.getBytes());
    } catch (_) {}
  });
}

function fdSaveDataUrlImage_(dataUrl, name) {
  const m = String(dataUrl).match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!m) return '';
  const ext = m[1].indexOf('png') >= 0 ? 'png' : (m[1].indexOf('webp') >= 0 ? 'webp' : 'jpg');
  const bytes = Utilities.base64Decode(m[2]);
  const blob = Utilities.newBlob(bytes,m[1],name+'.'+ext);
  const folders = DriveApp.getFoldersByName('фото для кп html');
  const folder = folders.hasNext() ? folders.next() : DriveApp.createFolder('фото для кп html');
  return folder.createFile(blob).getId();
}

function fdHistoryJson_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function fdHistoryJsonp_(e,obj) {
  const cb = String((e.parameter || {}).callback || 'callback').replace(/[^a-zA-Z0-9_$\.]/g,'');
  return ContentService.createTextOutput(cb + '(' + JSON.stringify(obj) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
}

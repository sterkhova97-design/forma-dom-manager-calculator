
const EMBEDDED_CATALOG = [{"id":"divan_kvadratnyy_pomidornye_yaschiki","name":"Диван прямой","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"106000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"dekorativnye_utyazhki","label":"декоративные утяжки","value":0.35,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/decorative-tufts-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":9.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"burlet","label":"бурлет","value":0.1,"sortOrder":10.0,"settings":{}}]},{"id":"mehanizm","name":"Механизм","label":"Механизм","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":5.0,"settings":{"slotsCount":1},"options":[{"id":"pantograf","label":"пантограф","value":40000,"sortOrder":1.0,"settings":{}},{"id":"delfin","label":"дельфин","value":40000,"sortOrder":2.0,"settings":{}},{"id":"puma","label":"пума","value":40000,"sortOrder":3.0,"settings":{}}]},{"id":"napolnitel","name":"Наполнитель","label":"Наполнитель","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":6.0,"settings":{"slotsCount":1},"options":[{"id":"pena_poslednego_pokoleniya_povyshennogo_komforta_elax","label":"пена последнего поколения повышенного комфорта Elax","value":0,"sortOrder":1.0,"settings":{}},{"id":"puh","label":"пух","value":0.2,"sortOrder":2.0,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_divan_kvadratnyy_pomidornye_yaschiki","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_divan_kvadratnyy_pomidornye_yaschiki","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_divan_kvadratnyy_pomidornye_yaschiki","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_divan_kvadratnyy_pomidornye_yaschiki","label":"от 2400 до 3000","value":0.15,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_divan_kvadratnyy_pomidornye_yaschiki","label":"от 3000 до 3600","value":0.18,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_divan_kvadratnyy_pomidornye_yaschiki","label":"от 3600 до 4200","value":0.21,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_divan_kvadratnyy_pomidornye_yaschiki","label":"от 4200 до 4800","value":0.24,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_divan_kvadratnyy_pomidornye_yaschiki","label":"от 4800 до 5400","value":0.28,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_divan_kvadratnyy_pomidornye_yaschiki","label":"от 5400 до 6000","value":0.32,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_divan_kvadratnyy_pomidornye_yaschiki","label":"от 6000 до 6600","value":0.36,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_divan_kvadratnyy_pomidornye_yaschiki","label":"от 6600 до 7200","value":0.4,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_divan_kvadratnyy_pomidornye_yaschiki","label":"от 7200 до 7800","value":0.44,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_divan_kvadratnyy_pomidornye_yaschiki","label":"от 7800 до 8400","value":0.48,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_divan_kvadratnyy_pomidornye_yaschiki","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":7.1,"settings":{},"options":[{"id":"fabric_type_1_divan_kvadratnyy_pomidornye_yaschiki","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_divan_kvadratnyy_pomidornye_yaschiki","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_divan_kvadratnyy_pomidornye_yaschiki","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_divan_kvadratnyy_pomidornye_yaschiki","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_divan_kvadratnyy_pomidornye_yaschiki","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_divan_kvadratnyy_pomidornye_yaschiki","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_divan_kvadratnyy_pomidornye_yaschiki","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_divan_kvadratnyy_pomidornye_yaschiki","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_divan_kvadratnyy_pomidornye_yaschiki","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":8.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"inkrustatsiya_metallom","label":"инкрустация металлом","value":0.35,"sortOrder":8.0,"settings":{}},{"id":"inkrustatsiya_latunyu","label":"инкрустация латунью","value":0.45,"sortOrder":9.0,"settings":{}},{"id":"podium_skrytyy","label":"подиум скрытый","value":0.1,"sortOrder":10.0,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":0,"max":500,"unitPrice":"3500"},"options":[]},{"id":"podushka_valik","name":"Подушка валик","label":"Подушка валик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"min":0,"max":500,"unitPrice":"5500"},"options":[]},{"id":"podushka_55h55","name":"Подушка 55х55","label":"Подушка 55х55","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":11.0,"settings":{"min":0,"max":500,"unitPrice":"4000"},"options":[]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":13.0,"settings":{"trueValue":"0.15"},"options":[]},{"id":"slozhnost_poshiva_izgotovleniya","name":"Сложность пошива/изготовления","label":"Сложность пошива/изготовления","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":14.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}},{"id":"5.0","label":"5.0","value":0.5,"sortOrder":5.0,"settings":{}},{"id":"6.0","label":"6.0","value":0.6,"sortOrder":6.0,"settings":{}}]},{"id":"kommentarii","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"none","required":false,"sortOrder":15.0,"settings":{"baseValue":"0"},"options":[]},{"id":"spinka_perestavnaya_s_utyazheleniem","name":"Спинка переставная с утяжелением","label":"Спинка переставная с утяжелением","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":16.0,"settings":{"min":"","max":"","unitPrice":"18000"},"options":[]},{"id":"mehanizm_transformatsii_podgolovnika_podlokotnika","name":"Механизм трансформации подголовника/подлокотника","label":"Механизм трансформации подголовника/подлокотника","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":17.0,"settings":{"min":"","max":"","unitPrice":"7000"},"options":[]},{"id":"ottoman_divan_kvadratnyy_pomidornye_yaschiki","name":"Оттоманка","label":"Оттоманка","inputType":"single_choice","valueType":"number","showInKp":true,"kpRenderType":"","calcMode":"add","required":false,"sortOrder":77.0,"settings":{},"options":[{"id":"ottoman_none_divan_kvadratnyy_pomidornye_yaschiki","label":"Без оттоманки","value":0,"sortOrder":1,"settings":{}},{"id":"ottoman_static_divan_kvadratnyy_pomidornye_yaschiki","label":"Статичная","value":30000,"sortOrder":2,"settings":{}},{"id":"ottoman_lift_divan_kvadratnyy_pomidornye_yaschiki","label":"Подъёмная","value":44000,"sortOrder":3,"settings":{}}]}]},{"id":"divan_uglovoy","name":"Диван угловой","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"106000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":true,"useHeight":false,"sumBeforeMultiply":true},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"dekorativnye_utyazhki","label":"декоративные утяжки","value":0.35,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/decorative-tufts-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":9.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"finish_burlet_divan_uglovoy","label":"Бурлет","value":0,"sortOrder":10,"settings":{}}]},{"id":"mehanizm","name":"Механизм","label":"Механизм","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":5.0,"settings":{"slotsCount":1},"options":[{"id":"pantograf","label":"пантограф","value":40000,"sortOrder":1.0,"settings":{}},{"id":"delfin","label":"дельфин","value":40000,"sortOrder":2.0,"settings":{}},{"id":"puma","label":"пума","value":40000,"sortOrder":3.0,"settings":{}}]},{"id":"napolnitel","name":"Наполнитель","label":"Наполнитель","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":6.0,"settings":{"slotsCount":1},"options":[{"id":"pena_poslednego_pokoleniya_povyshennogo_komforta_elax","label":"пена последнего поколения повышенного комфорта Elax","value":0,"sortOrder":1.0,"settings":{}},{"id":"puh","label":"пух","value":0.2,"sortOrder":2.0,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_divan_uglovoy","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_divan_uglovoy","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_divan_uglovoy","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_divan_uglovoy","label":"от 2400 до 3000","value":0.15,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_divan_uglovoy","label":"от 3000 до 3600","value":0.18,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_divan_uglovoy","label":"от 3600 до 4200","value":0.21,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_divan_uglovoy","label":"от 4200 до 4800","value":0.24,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_divan_uglovoy","label":"от 4800 до 5400","value":0.28,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_divan_uglovoy","label":"от 5400 до 6000","value":0.32,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_divan_uglovoy","label":"от 6000 до 6600","value":0.36,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_divan_uglovoy","label":"от 6600 до 7200","value":0.4,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_divan_uglovoy","label":"от 7200 до 7800","value":0.44,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_divan_uglovoy","label":"от 7800 до 8400","value":0.48,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_divan_uglovoy","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":7.1,"settings":{},"options":[{"id":"fabric_type_1_divan_uglovoy","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_divan_uglovoy","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_divan_uglovoy","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_divan_uglovoy","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_divan_uglovoy","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_divan_uglovoy","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_divan_uglovoy","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_divan_uglovoy","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_divan_uglovoy","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":8.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"inkrustatsiya_metallom","label":"инкрустация металлом","value":0.35,"sortOrder":8.0,"settings":{}},{"id":"inkrustatsiya_latunyu","label":"инкрустация латунью","value":0.45,"sortOrder":9.0,"settings":{}},{"id":"podium_skrytyy","label":"подиум скрытый","value":0.1,"sortOrder":10.0,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":0,"max":500,"unitPrice":"3500"},"options":[]},{"id":"podushka_valik","name":"Подушка валик","label":"Подушка валик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"min":0,"max":500,"unitPrice":"5500"},"options":[]},{"id":"podushka_55h55","name":"Подушка 55х55","label":"Подушка 55х55","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":11.0,"settings":{"min":"","max":500,"unitPrice":"4000"},"options":[]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":13.0,"settings":{"trueValue":"0.15"},"options":[]},{"id":"slozhnost_poshiva_izgotovleniya","name":"Сложность пошива/изготовления","label":"Сложность пошива/изготовления","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":14.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}}]},{"id":"kommentarii","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"none","required":false,"sortOrder":15.0,"settings":{"baseValue":"0"},"options":[]},{"id":"spinka_perestavnaya_s_utyazheleniem","name":"Спинка переставная с утяжелением","label":"Спинка переставная с утяжелением","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":16.0,"settings":{"min":"","max":"","unitPrice":"18000"},"options":[]},{"id":"mehanizm_transformatsii_podgolovnika_podlokotnika","name":"Механизм трансформации подголовника/подлокотника","label":"Механизм трансформации подголовника/подлокотника","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":17.0,"settings":{"min":0,"max":"","unitPrice":"7000"},"options":[]},{"id":"ottoman_divan_uglovoy","name":"Оттоманка","label":"Оттоманка","inputType":"single_choice","valueType":"number","showInKp":true,"kpRenderType":"","calcMode":"add","required":false,"sortOrder":77.0,"settings":{},"options":[{"id":"ottoman_none_divan_uglovoy","label":"Без оттоманки","value":0,"sortOrder":1,"settings":{}},{"id":"ottoman_static_divan_uglovoy","label":"Статичная","value":30000,"sortOrder":2,"settings":{}},{"id":"ottoman_lift_divan_uglovoy","label":"Подъёмная","value":44000,"sortOrder":3,"settings":{}}]}]},{"id":"divan_radiusnyy","name":"Диван радиусный","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"121000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"dekorativnye_utyazhki","label":"декоративные утяжки","value":0.35,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/decorative-tufts-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":9.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"burlet","label":"бурлет","value":0.1,"sortOrder":10.0,"settings":{}}]},{"id":"mehanizm","name":"Механизм","label":"Механизм","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":5.0,"settings":{"slotsCount":1},"options":[{"id":"pantograf","label":"пантограф","value":40000,"sortOrder":1.0,"settings":{}},{"id":"delfin","label":"дельфин","value":40000,"sortOrder":2.0,"settings":{}},{"id":"puma","label":"пума","value":40000,"sortOrder":3.0,"settings":{}}]},{"id":"napolnitel","name":"Наполнитель","label":"Наполнитель","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":6.0,"settings":{"slotsCount":1},"options":[{"id":"pena_poslednego_pokoleniya_povyshennogo_komforta_elax","label":"пена последнего поколения повышенного комфорта Elax","value":0,"sortOrder":1.0,"settings":{}},{"id":"puh","label":"пух","value":0.2,"sortOrder":2.0,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_divan_radiusnyy","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_divan_radiusnyy","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_divan_radiusnyy","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_divan_radiusnyy","label":"от 2400 до 3000","value":0.15,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_divan_radiusnyy","label":"от 3000 до 3600","value":0.18,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_divan_radiusnyy","label":"от 3600 до 4200","value":0.21,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_divan_radiusnyy","label":"от 4200 до 4800","value":0.24,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_divan_radiusnyy","label":"от 4800 до 5400","value":0.28,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_divan_radiusnyy","label":"от 5400 до 6000","value":0.32,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_divan_radiusnyy","label":"от 6000 до 6600","value":0.36,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_divan_radiusnyy","label":"от 6600 до 7200","value":0.4,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_divan_radiusnyy","label":"от 7200 до 7800","value":0.44,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_divan_radiusnyy","label":"от 7800 до 8400","value":0.48,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_divan_radiusnyy","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":7.1,"settings":{},"options":[{"id":"fabric_type_1_divan_radiusnyy","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_divan_radiusnyy","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_divan_radiusnyy","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_divan_radiusnyy","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_divan_radiusnyy","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_divan_radiusnyy","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_divan_radiusnyy","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_divan_radiusnyy","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_divan_radiusnyy","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":8.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"inkrustatsiya_metallom","label":"инкрустация металлом","value":0.35,"sortOrder":8.0,"settings":{}},{"id":"inkrustatsiya_latunyu","label":"инкрустация латунью","value":0.45,"sortOrder":9.0,"settings":{}},{"id":"podium_skrytyy","label":"подиум скрытый","value":0.1,"sortOrder":10.0,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":0,"max":500,"unitPrice":"3500"},"options":[]},{"id":"podushka_valik","name":"Подушка валик","label":"Подушка валик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"min":0,"max":500,"unitPrice":"5500"},"options":[]},{"id":"podushka_55h55","name":"Подушка 55х55","label":"Подушка 55х55","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":11.0,"settings":{"min":0,"max":500,"unitPrice":"4000"},"options":[]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":13.0,"settings":{"trueValue":"0.15"},"options":[]},{"id":"kommentarii","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"none","required":false,"sortOrder":14.0,"settings":{"baseValue":"0"},"options":[]},{"id":"spinka_perestavnaya_s_utyazheleniem","name":"Спинка переставная с утяжелением","label":"Спинка переставная с утяжелением","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":15.0,"settings":{"min":0,"max":"","unitPrice":"18000"},"options":[]},{"id":"mehanizm_transformatsii_podgolovnika_podlokotnika","name":"Механизм трансформации подголовника/подлокотника","label":"Механизм трансформации подголовника/подлокотника","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":16.0,"settings":{"min":0,"max":"","unitPrice":"7000"},"options":[]},{"id":"ottoman_divan_radiusnyy","name":"Оттоманка","label":"Оттоманка","inputType":"single_choice","valueType":"number","showInKp":true,"kpRenderType":"","calcMode":"add","required":false,"sortOrder":76.0,"settings":{},"options":[{"id":"ottoman_none_divan_radiusnyy","label":"Без оттоманки","value":0,"sortOrder":1,"settings":{}},{"id":"ottoman_static_divan_radiusnyy","label":"Статичная","value":30000,"sortOrder":2,"settings":{}},{"id":"ottoman_lift_divan_radiusnyy","label":"Подъёмная","value":44000,"sortOrder":3,"settings":{}}]}]},{"id":"krovat","name":"Кровать","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"100000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"finish_burlet_krovat","label":"Бурлет","value":0,"sortOrder":9,"settings":{}},{"id":"finish_rollers_krovat","label":"Валики","value":0.2,"sortOrder":10,"settings":{},"image":"./assets/images/wall-panels/wall-rollers-v27.png"},{"id":"finish_wave_krovat","label":"Волна","value":0.2,"sortOrder":11,"settings":{},"image":"./assets/images/wall-panels/wall-wave-v27.png"}]},{"id":"mehanizm","name":"Подъёмный механизм","label":"Подъёмный механизм","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"add","required":false,"sortOrder":5.0,"settings":{"trueValue":25000,"clientBooleanLabel":"Подъёмный"},"options":[]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":6.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_krovat","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_krovat","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_krovat","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_krovat","label":"от 2400 до 3000","value":0.15,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_krovat","label":"от 3000 до 3600","value":0.18,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_krovat","label":"от 3600 до 4200","value":0.21,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_krovat","label":"от 4200 до 4800","value":0.24,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_krovat","label":"от 4800 до 5400","value":0.28,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_krovat","label":"от 5400 до 6000","value":0.32,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_krovat","label":"от 6000 до 6600","value":0.36,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_krovat","label":"от 6600 до 7200","value":0.4,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_krovat","label":"от 7200 до 7800","value":0.44,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_krovat","label":"от 7800 до 8400","value":0.48,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_krovat","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":6.1,"settings":{},"options":[{"id":"fabric_type_1_krovat","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_krovat","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_krovat","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_krovat","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_krovat","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_krovat","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_krovat","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_krovat","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_krovat","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"support_hidden_podium_krovat","label":"Подиум скрытый","value":0,"sortOrder":8,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":8.0,"settings":{"min":"","max":500,"unitPrice":"3500"},"options":[]},{"id":"podushka_valik","name":"Подушка валик","label":"Подушка валик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":"","max":500,"unitPrice":"5500"},"options":[]},{"id":"podushka_55h55","name":"Подушка 55х55","label":"Подушка 55х55","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"min":"","max":500,"unitPrice":"4000"},"options":[]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":12.0,"settings":{"trueValue":"0.12"},"options":[]},{"id":"vrezka_rozetok","name":"Врезка розеток","label":"Врезка розеток","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":13.0,"settings":{"min":"","max":4,"unitPrice":"27000"},"options":[]},{"id":"podsvetka","name":"Подсветка","label":"Подсветка","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":14.0,"settings":{"min":"","max":10,"unitPrice":"80000"},"options":[]},{"id":"slozhnost_izdeliya","name":"Сложность изделия","label":"Сложность изделия","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":15.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}}]},{"id":"kommentarii_krovat","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"none","required":false,"sortOrder":16.0,"settings":{"baseValue":"0"},"options":[]},{"id":"bortik_krovat","name":"Бортик","label":"Бортик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"none","required":false,"sortOrder":17.0,"settings":{"min":0,"max":"","unitPrice":"30000"},"options":[]},{"id":"dop_spalnoe_mesto_krovat","name":"Доп. спальное место","label":"Доп. спальное место","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":18.0,"settings":{"slotsCount":1},"options":[{"id":"s_mehanizmom_delfin_krovat","label":"с механизмом дельфин","value":0,"sortOrder":1.0,"settings":{}},{"id":"s_mehanizmom_delfin_i_zabivnym_matrasom_krovat","label":"с механизмом дельфин и забивным матрасом","value":0,"sortOrder":2.0,"settings":{}},{"id":"vydvizhnoe_pod_matras_krovat","label":"выдвижное под матрас","value":0,"sortOrder":3.0,"settings":{}},{"id":"vydvizhnoe_s_zabivnym_matrasom_krovat","label":"выдвижное с забивным матрасом","value":0,"sortOrder":4.0,"settings":{}}]},{"id":"vydvizhnoy_yaschik_krovat","name":"Выдвижной ящик","label":"Выдвижной ящик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":19.0,"settings":{"min":0,"max":"","unitPrice":"15000"},"options":[]},{"id":"zabivnoy_matras_krovat","name":"Забивной матрас","label":"Забивной матрас","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":20.0,"settings":{"slotsCount":1},"options":[{"id":"na_ppu_krovat","label":"на ППУ","value":0,"sortOrder":1.0,"settings":{}},{"id":"pruzhinnyy_krovat","label":"пружинный","value":0,"sortOrder":2.0,"settings":{}}]}]},{"id":"krovat_bez_izgolovya","name":"Кровать без изголовья","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"80000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"finish_burlet_krovat_bez_izgolovya","label":"Бурлет","value":0,"sortOrder":9,"settings":{}}]},{"id":"mehanizm","name":"Подъёмный механизм","label":"Подъёмный механизм","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"add","required":false,"sortOrder":5.0,"settings":{"trueValue":25000,"clientBooleanLabel":"Подъёмный"},"options":[]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":6.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_krovat_bez_izgolovya","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_krovat_bez_izgolovya","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_krovat_bez_izgolovya","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_krovat_bez_izgolovya","label":"от 2400 до 3000","value":0.15,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_krovat_bez_izgolovya","label":"от 3000 до 3600","value":0.18,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_krovat_bez_izgolovya","label":"от 3600 до 4200","value":0.21,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_krovat_bez_izgolovya","label":"от 4200 до 4800","value":0.24,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_krovat_bez_izgolovya","label":"от 4800 до 5400","value":0.28,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_krovat_bez_izgolovya","label":"от 5400 до 6000","value":0.32,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_krovat_bez_izgolovya","label":"от 6000 до 6600","value":0.36,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_krovat_bez_izgolovya","label":"от 6600 до 7200","value":0.4,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_krovat_bez_izgolovya","label":"от 7200 до 7800","value":0.44,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_krovat_bez_izgolovya","label":"от 7800 до 8400","value":0.48,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_krovat_bez_izgolovya","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":6.1,"settings":{},"options":[{"id":"fabric_type_1_krovat_bez_izgolovya","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_krovat_bez_izgolovya","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_krovat_bez_izgolovya","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_krovat_bez_izgolovya","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_krovat_bez_izgolovya","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_krovat_bez_izgolovya","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_krovat_bez_izgolovya","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_krovat_bez_izgolovya","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_krovat_bez_izgolovya","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"support_hidden_podium_krovat_bez_izgolovya","label":"Подиум скрытый","value":0,"sortOrder":8,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":8.0,"settings":{"min":0,"max":500,"unitPrice":"3500"},"options":[]},{"id":"podushka_valik","name":"Подушка валик","label":"Подушка валик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":0,"max":500,"unitPrice":"5500"},"options":[]},{"id":"podushka_55h55","name":"Подушка 55х55","label":"Подушка 55х55","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"min":0,"max":500,"unitPrice":"4000"},"options":[]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":12.0,"settings":{"trueValue":"0.12"},"options":[]},{"id":"kommentarii_krovat_bez_izgolovya","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"none","required":false,"sortOrder":13.0,"settings":{"baseValue":"0"},"options":[]},{"id":"bortik_krovat_bez_izgolovya","name":"Бортик","label":"Бортик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"none","required":false,"sortOrder":14.0,"settings":{"min":0,"max":"","unitPrice":"30000"},"options":[]},{"id":"dop_spalnoe_mesto_krovat_bez_izgolovya","name":"Доп. спальное место","label":"Доп. спальное место","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":15.0,"settings":{"slotsCount":1},"options":[{"id":"s_mehanizmom_delfin_krovat_bez_izgolovya","label":"с механизмом дельфин","value":0,"sortOrder":1.0,"settings":{}},{"id":"s_mehanizmom_delfin_i_zabivnym_matrasom_krovat_bez_izgolovya","label":"с механизмом дельфин и забивным матрасом","value":0,"sortOrder":2.0,"settings":{}},{"id":"vydvizhnoe_pod_matras_krovat_bez_izgolovya","label":"выдвижное под матрас","value":0,"sortOrder":3.0,"settings":{}},{"id":"vydvizhnoe_s_zabivnym_matrasom_krovat_bez_izgolovya","label":"выдвижное с забивным матрасом","value":0,"sortOrder":4.0,"settings":{}}]},{"id":"vydvizhnoy_yaschik_krovat_bez_izgolovya","name":"Выдвижной ящик","label":"Выдвижной ящик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":16.0,"settings":{"min":0,"max":"","unitPrice":"15000"},"options":[]},{"id":"zabivnoy_matras_krovat_bez_izgolovya","name":"Забивной матрас","label":"Забивной матрас","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":17.0,"settings":{"slotsCount":1},"options":[{"id":"na_ppu_krovat_bez_izgolovya","label":"на ППУ","value":0,"sortOrder":1.0,"settings":{}},{"id":"pruzhinnyy_krovat_bez_izgolovya","label":"пружинный","value":0,"sortOrder":2.0,"settings":{}}]}]},{"id":"krovat_so_stenovoy_panelyu","name":"Кровать со стеновой панелью","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"95000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"burlet","label":"бурлет","value":0,"sortOrder":9.0,"settings":{}},{"id":"finish_rollers_krovat_so_stenovoy_panelyu","label":"Валики","value":0.2,"sortOrder":10,"settings":{},"image":"./assets/images/wall-panels/wall-rollers-v27.png"},{"id":"finish_wave_krovat_so_stenovoy_panelyu","label":"Волна","value":0.2,"sortOrder":11,"settings":{},"image":"./assets/images/wall-panels/wall-wave-v27.png"}]},{"id":"mehanizm","name":"Подъёмный механизм","label":"Подъёмный механизм","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"add","required":false,"sortOrder":5.0,"settings":{"trueValue":25000,"clientBooleanLabel":"Подъёмный"},"options":[]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":6.0,"settings":{"slotsCount":1},"options":[{"id":"fabric_price_1_krovat_so_stenovoy_panelyu","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_krovat_so_stenovoy_panelyu","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_krovat_so_stenovoy_panelyu","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_krovat_so_stenovoy_panelyu","label":"от 2400 до 3000","value":0.15,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_krovat_so_stenovoy_panelyu","label":"от 3000 до 3600","value":0.18,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_krovat_so_stenovoy_panelyu","label":"от 3600 до 4200","value":0.21,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_krovat_so_stenovoy_panelyu","label":"от 4200 до 4800","value":0.24,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_krovat_so_stenovoy_panelyu","label":"от 4800 до 5400","value":0.28,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_krovat_so_stenovoy_panelyu","label":"от 5400 до 6000","value":0.32,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_krovat_so_stenovoy_panelyu","label":"от 6000 до 6600","value":0.36,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_krovat_so_stenovoy_panelyu","label":"от 6600 до 7200","value":0.4,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_krovat_so_stenovoy_panelyu","label":"от 7200 до 7800","value":0.44,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_krovat_so_stenovoy_panelyu","label":"от 7800 до 8400","value":0.48,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_krovat_so_stenovoy_panelyu","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":6.1,"settings":{},"options":[{"id":"fabric_type_1_krovat_so_stenovoy_panelyu","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_krovat_so_stenovoy_panelyu","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_krovat_so_stenovoy_panelyu","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_krovat_so_stenovoy_panelyu","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_krovat_so_stenovoy_panelyu","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_krovat_so_stenovoy_panelyu","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_krovat_so_stenovoy_panelyu","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_krovat_so_stenovoy_panelyu","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_krovat_so_stenovoy_panelyu","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"inkrustatsiya_metallom","label":"инкрустация металлом","value":0.35,"sortOrder":8.0,"settings":{}},{"id":"inkrustatsiya_latunyu","label":"инкрустация латунью","value":0.45,"sortOrder":9.0,"settings":{}},{"id":"support_hidden_podium_krovat_so_stenovoy_panelyu","label":"Подиум скрытый","value":0,"sortOrder":10,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":8.0,"settings":{"min":0,"max":500,"unitPrice":"3500"},"options":[]},{"id":"podushka_valik","name":"Подушка валик","label":"Подушка валик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":0,"max":500,"unitPrice":"5500"},"options":[]},{"id":"podushka_55h55","name":"Подушка 55х55","label":"Подушка 55х55","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"min":0,"max":500,"unitPrice":"4000"},"options":[]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":12.0,"settings":{"trueValue":"0.12"},"options":[]},{"id":"vrezka_rozetok","name":"Врезка розеток","label":"Врезка розеток","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":13.0,"settings":{"min":0,"max":4,"unitPrice":"27000"},"options":[]},{"id":"podsvetka","name":"Подсветка","label":"Подсветка","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":14.0,"settings":{"min":0,"max":10,"unitPrice":"8000"},"options":[]},{"id":"gabarity_stenovoy_paneli","name":"Габариты стеновой панели","label":"Габариты стеновой панели","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":15.0,"settings":{"slotsCount":1},"options":[{"id":"do_2500_mm","label":"до 2500 мм","value":0.15,"sortOrder":1.0,"settings":{}},{"id":"do_2800_mm","label":"до 2800 мм","value":0.18,"sortOrder":2.0,"settings":{}},{"id":"do_3000_mm","label":"до 3000 мм","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"do_3300_mm","label":"до 3300 мм","value":0.24,"sortOrder":4.0,"settings":{}},{"id":"do_3500_mm","label":"до 3500 мм","value":0.28,"sortOrder":5.0,"settings":{}},{"id":"do_3800_mm","label":"до 3800 мм","value":0.32,"sortOrder":6.0,"settings":{}},{"id":"do_4000_mm","label":"до 4000 мм","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"do_4300_mm","label":"до 4300 мм","value":0.38,"sortOrder":8.0,"settings":{}},{"id":"do_4500_mm","label":"до 4500 мм","value":0.4,"sortOrder":9.0,"settings":{}},{"id":"do_4800_mm","label":"до 4800 мм","value":0.41,"sortOrder":10.0,"settings":{}},{"id":"do_5000_mm","label":"до 5000 мм","value":0.43,"sortOrder":11.0,"settings":{}}]},{"id":"kommentarii","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"none","required":false,"sortOrder":16.0,"settings":{"baseValue":"0"},"options":[]},{"id":"bortik","name":"Бортик","label":"Бортик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"none","required":false,"sortOrder":17.0,"settings":{"min":0,"max":"","unitPrice":"30000"},"options":[]},{"id":"dop_spalnoe_mesto","name":"Доп. спальное место","label":"Доп. спальное место","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":18.0,"settings":{"slotsCount":1},"options":[{"id":"s_mehanizmom_delfin","label":"с механизмом дельфин","value":0,"sortOrder":1.0,"settings":{}},{"id":"s_mehanizmom_delfin_i_zabivnym_matrasom","label":"с механизмом дельфин и забивным матрасом","value":0,"sortOrder":2.0,"settings":{}},{"id":"vydvizhnoe_pod_matras","label":"выдвижное под матрас","value":0,"sortOrder":3.0,"settings":{}},{"id":"vydvizhnoe_s_zabivnym_matrasom","label":"выдвижное с забивным матрасом","value":0,"sortOrder":4.0,"settings":{}}]},{"id":"vydvizhnoy_yaschik","name":"Выдвижной ящик","label":"Выдвижной ящик","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":19.0,"settings":{"min":0,"max":"","unitPrice":"15000"},"options":[]},{"id":"zabivnoy_matras","name":"Забивной матрас","label":"Забивной матрас","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":20.0,"settings":{"slotsCount":1},"options":[{"id":"na_ppu","label":"на ППУ","value":0,"sortOrder":1.0,"settings":{}},{"id":"pruzhinnyy","label":"пружинный","value":0,"sortOrder":2.0,"settings":{}}]}]},{"id":"kreslo","name":"Кресло","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"110000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"none","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"dekorativnye_utyazhki","label":"декоративные утяжки","value":0.35,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/decorative-tufts-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":9.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"finish_burlet_kreslo","label":"Бурлет","value":0,"sortOrder":10,"settings":{}}]},{"id":"napolnitel","name":"Наполнитель","label":"Наполнитель","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":5.0,"settings":{"slotsCount":1},"options":[{"id":"pena_poslednego_pokoleniya_povyshennogo_komforta_elax","label":"пена последнего поколения повышенного комфорта Elax","value":0,"sortOrder":1.0,"settings":{}},{"id":"puh","label":"пух","value":0.2,"sortOrder":2.0,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":6.0,"settings":{"slotsCount":1},"options":[{"id":"fabric_price_1_kreslo","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_kreslo","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_kreslo","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_kreslo","label":"от 2400 до 3000","value":0.18,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_kreslo","label":"от 3000 до 3600","value":0.22,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_kreslo","label":"от 3600 до 4200","value":0.22,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_kreslo","label":"от 4200 до 4800","value":0.22,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_kreslo","label":"от 4800 до 5400","value":0.22,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_kreslo","label":"от 5400 до 6000","value":0.22,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_kreslo","label":"от 6000 до 6600","value":0.22,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_kreslo","label":"от 6600 до 7200","value":0.22,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_kreslo","label":"от 7200 до 7800","value":0.22,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_kreslo","label":"от 7800 до 8400","value":0.22,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_kreslo","label":"от 8400 до 9000","value":0.22,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":6.1,"settings":{},"options":[{"id":"fabric_type_1_kreslo","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_kreslo","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_kreslo","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_kreslo","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_kreslo","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_kreslo","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_kreslo","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_kreslo","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_kreslo","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}}]},{"id":"podushka_45h45","name":"Подушка 45х45","label":"Подушка 45х45","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":8.0,"settings":{"min":0,"max":500,"unitPrice":"3500"},"options":[]},{"id":"mehanizm","name":"Механизм","label":"Механизм","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"add","required":false,"sortOrder":10.0,"settings":{"slotsCount":1},"options":[{"id":"povorotnyy","label":"поворотный","value":0.15,"sortOrder":1.0,"settings":{}}]},{"id":"slozhnost","name":"Сложность","label":"Сложность","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":11.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}}]},{"id":"comments_kreslo","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":false,"sortOrder":111.0,"settings":{"multiline":true,"placeholder":"Комментарий (необязательно)"},"options":[]}]},{"id":"banketka","name":"Банкетка","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"65000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"dekorativnye_utyazhki","label":"декоративные утяжки","value":0.35,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/decorative-tufts-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":9.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"finish_burlet_banketka","label":"Бурлет","value":0,"sortOrder":10,"settings":{}}]},{"id":"napolnitel","name":"Наполнитель","label":"Наполнитель","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":5.0,"settings":{"slotsCount":1},"options":[{"id":"pena_poslednego_pokoleniya_povyshennogo_komforta_elax","label":"пена последнего поколения повышенного комфорта Elax","value":0,"sortOrder":1.0,"settings":{}},{"id":"puh","label":"пух","value":0.2,"sortOrder":2.0,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":6.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_banketka","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_banketka","label":"от 1200 до 1800","value":0.07,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_banketka","label":"от 1800 до 2400","value":0.14,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_banketka","label":"от 2400 до 3000","value":0.18,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_banketka","label":"от 3000 до 3600","value":0.21,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_banketka","label":"от 3600 до 4200","value":0.24,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_banketka","label":"от 4200 до 4800","value":0.28,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_banketka","label":"от 4800 до 5400","value":0.32,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_banketka","label":"от 5400 до 6000","value":0.35,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_banketka","label":"от 6000 до 6600","value":0.38,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_banketka","label":"от 6600 до 7200","value":0.42,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_banketka","label":"от 7200 до 7800","value":0.45,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_banketka","label":"от 7800 до 8400","value":0.49,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_banketka","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":6.1,"settings":{},"options":[{"id":"fabric_type_1_banketka","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_banketka","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_banketka","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_banketka","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_banketka","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_banketka","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_banketka","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_banketka","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_banketka","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"opory","name":"Опоры","label":"Опоры","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":7.0,"settings":{"slotsCount":1},"options":[{"id":"skrytye","label":"скрытые","value":0,"sortOrder":1.0,"settings":{}},{"id":"metall_gotovye_modeli","label":"металл (готовые модели)","value":0.05,"sortOrder":2.0,"settings":{}},{"id":"metall_na_zakaz","label":"металл (на заказ)","value":0.2,"sortOrder":3.0,"settings":{}},{"id":"metall_rama","label":"металл (рама)","value":0.3,"sortOrder":4.0,"settings":{}},{"id":"massiv_gotovye_modeli","label":"массив (готовые модели)","value":0.1,"sortOrder":5.0,"settings":{}},{"id":"massiv_na_zakaz","label":"массив (на заказ)","value":0.2,"sortOrder":6.0,"settings":{}},{"id":"massiv_rama","label":"массив (рама)","value":0.35,"sortOrder":7.0,"settings":{}},{"id":"v_tkani","label":"в ткани","value":0.05,"sortOrder":8.0,"settings":{}}]},{"id":"slozhnost","name":"Сложность","label":"Сложность","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":9.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}}]},{"id":"radius","name":"Радиус","label":"Радиус","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":10.0,"settings":{"trueValue":"0.15"},"options":[]},{"id":"comments_banketka","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":false,"sortOrder":110.0,"settings":{"multiline":true,"placeholder":"Комментарий (необязательно)"},"options":[]}]},{"id":"puf","name":"Пуф","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"90000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":false,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"finish_burlet_puf","label":"Бурлет","value":0,"sortOrder":9,"settings":{}}]},{"id":"napolnitel","name":"Наполнитель","label":"Наполнитель","inputType":"select","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":5.0,"settings":{"slotsCount":1},"options":[{"id":"pena_poslednego_pokoleniya_povyshennogo_komforta_elax","label":"пена последнего поколения повышенного комфорта Elax","value":0,"sortOrder":1.0,"settings":{}},{"id":"puh","label":"пух","value":0.2,"sortOrder":2.0,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":6.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_puf","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_puf","label":"от 1200 до 1800","value":0.07,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_puf","label":"от 1800 до 2400","value":0.14,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_puf","label":"от 2400 до 3000","value":0.18,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_puf","label":"от 3000 до 3600","value":0.21,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_puf","label":"от 3600 до 4200","value":0.24,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_puf","label":"от 4200 до 4800","value":0.28,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_puf","label":"от 4800 до 5400","value":0.32,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_puf","label":"от 5400 до 6000","value":0.35,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_puf","label":"от 6000 до 6600","value":0.38,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_puf","label":"от 6600 до 7200","value":0.42,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_puf","label":"от 7200 до 7800","value":0.45,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_puf","label":"от 7800 до 8400","value":0.49,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_puf","label":"от 8400 до 9000","value":0.52,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":6.1,"settings":{},"options":[{"id":"fabric_type_1_puf","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_puf","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_puf","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_puf","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_puf","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_puf","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_puf","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_puf","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_puf","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"slozhnost_izdeliya","name":"Сложность изделия","label":"Сложность изделия","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":7.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}}]},{"id":"comments_puf","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":false,"sortOrder":107.0,"settings":{"multiline":true,"placeholder":"Комментарий (необязательно)"},"options":[]},{"id":"supports_puf","name":"Опоры","label":"Опоры","inputType":"single_choice","valueType":"number","showInKp":true,"kpRenderType":"","calcMode":"custom_support","required":false,"sortOrder":47.0,"settings":{},"options":[{"id":"pouf_support_none_puf","label":"Без опор","value":0,"sortOrder":1,"settings":{"pricingMode":"none"}},{"id":"pouf_plinth_metal_puf","label":"Цоколь металл","value":7500,"sortOrder":2,"settings":{"pricingMode":"per_width_meter"}},{"id":"pouf_plinth_fabric_puf","label":"Цоколь в ткани","value":1500,"sortOrder":3,"settings":{"pricingMode":"per_width_meter"}},{"id":"pouf_metal_ready_puf","label":"Металл (готовые варианты)","value":5000,"sortOrder":4,"settings":{"pricingMode":"fixed"}},{"id":"pouf_metal_custom_puf","label":"Металл (на заказ)","value":0.25,"sortOrder":5,"settings":{"pricingMode":"percent_base"}},{"id":"pouf_wood_ready_puf","label":"Массив (готовые варианты)","value":5000,"sortOrder":6,"settings":{"pricingMode":"fixed"}},{"id":"pouf_wood_custom_puf","label":"Массив (на заказ)","value":0.25,"sortOrder":7,"settings":{"pricingMode":"percent_base"}}]}]},{"id":"stenovaya_panel","name":"Стеновая панель","params":[{"id":"startovaya_tsena","name":"Стартовая цена","label":"Стартовая цена","inputType":"text","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"base_price","required":true,"sortOrder":1.0,"settings":{"baseValue":"38000"},"options":[]},{"id":"gabarity","name":"Габариты","label":"Габариты","inputType":"dimensions","valueType":"object","showInKp":true,"kpRenderType":"dimensions","calcMode":"multiply","required":true,"sortOrder":2.0,"settings":{"fields":["width","depth","height"],"format":"{width}×{depth}×{height} мм","useWidth":true,"useDepth":false,"useHeight":true,"sumBeforeMultiply":false},"options":[]},{"id":"foto","name":"Фото","label":"Фото","inputType":"image","valueType":"string","showInKp":false,"kpRenderType":"image","calcMode":"none","required":true,"sortOrder":3.0,"settings":{"imageMode":"upload"},"options":[]},{"id":"otdelka","name":"Отделка","label":"Отделка","inputType":"multi_select_inline","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":4.0,"settings":{"slotsCount":4},"options":[{"id":"kant","label":"кант","value":0.1,"sortOrder":1.0,"settings":{},"image":"./assets/images/finishes/kant-v26.jpg"},{"id":"dvoynaya_otstrochka","label":"двойная отстрочка","value":0.1,"sortOrder":2.0,"settings":{},"image":"./assets/images/finishes/double-stitch-v26.jpg"},{"id":"skladki","label":"складки","value":0.15,"sortOrder":3.0,"settings":{},"image":"./assets/images/finishes/folds-v26.png"},{"id":"karetnaya_styazhka","label":"каретная стяжка","value":0.25,"sortOrder":4.0,"settings":{},"image":"./assets/images/finishes/capitone-v26.jpg"},{"id":"kvadratnaya_prostezhka","label":"квадратная простёжка","value":0.3,"sortOrder":5.0,"settings":{},"image":"./assets/images/finishes/square-quilting-v26.jpg"},{"id":"vstavki_massiv","label":"вставки массив","value":0.25,"sortOrder":6.0,"settings":{},"image":"./assets/images/finishes/wood-insert-v26.jpg"},{"id":"vstavki_metall","label":"вставки металл","value":0.25,"sortOrder":7.0,"settings":{},"image":"./assets/images/finishes/metal-insert-v26.jpeg"},{"id":"ploskiy_kant","label":"плоский кант","value":0.2,"sortOrder":8.0,"settings":{},"image":"./assets/images/finishes/flat-piping-v26.jpeg"},{"id":"valiki","label":"валики","value":0.2,"sortOrder":9.0,"settings":{},"image":"./assets/images/wall-panels/wall-rollers-v27.png"},{"id":"volna","label":"волна","value":0.2,"sortOrder":10.0,"settings":{},"image":"./assets/images/wall-panels/wall-wave-v27.png"},{"id":"finish_burlet_stenovaya_panel","label":"Бурлет","value":0,"sortOrder":11,"settings":{}}]},{"id":"tkan_price","name":"Цена ткани","label":"Цена ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"text","calcMode":"multiply","required":true,"sortOrder":5.0,"settings":{"slotsCount":2},"options":[{"id":"fabric_price_1_stenovaya_panel","label":"до 1200","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_price_2_stenovaya_panel","label":"от 1200 до 1800","value":0.1,"sortOrder":2,"settings":{}},{"id":"fabric_price_3_stenovaya_panel","label":"от 1800 до 2400","value":0.13,"sortOrder":3,"settings":{}},{"id":"fabric_price_4_stenovaya_panel","label":"от 2400 до 3000","value":0.18,"sortOrder":4,"settings":{}},{"id":"fabric_price_5_stenovaya_panel","label":"от 3000 до 3600","value":0.22,"sortOrder":5,"settings":{}},{"id":"fabric_price_6_stenovaya_panel","label":"от 3600 до 4200","value":0.27,"sortOrder":6,"settings":{}},{"id":"fabric_price_7_stenovaya_panel","label":"от 4200 до 4800","value":0.32,"sortOrder":7,"settings":{}},{"id":"fabric_price_8_stenovaya_panel","label":"от 4800 до 5400","value":0.37,"sortOrder":8,"settings":{}},{"id":"fabric_price_9_stenovaya_panel","label":"от 5400 до 6000","value":0.42,"sortOrder":9,"settings":{}},{"id":"fabric_price_10_stenovaya_panel","label":"от 6000 до 6600","value":0.47,"sortOrder":10,"settings":{}},{"id":"fabric_price_11_stenovaya_panel","label":"от 6600 до 7200","value":0.52,"sortOrder":11,"settings":{}},{"id":"fabric_price_12_stenovaya_panel","label":"от 7200 до 7800","value":0.57,"sortOrder":12,"settings":{}},{"id":"fabric_price_13_stenovaya_panel","label":"от 7800 до 8400","value":0.62,"sortOrder":13,"settings":{}},{"id":"fabric_price_14_stenovaya_panel","label":"от 8400 до 9000","value":0.67,"sortOrder":14,"settings":{}}]},{"id":"tkan_type","name":"Тип ткани","label":"Тип ткани","inputType":"single_choice","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":true,"sortOrder":5.1,"settings":{},"options":[{"id":"fabric_type_1_stenovaya_panel","label":"шенилл","value":0,"sortOrder":1,"settings":{}},{"id":"fabric_type_2_stenovaya_panel","label":"букле","value":0,"sortOrder":2,"settings":{}},{"id":"fabric_type_3_stenovaya_panel","label":"рогожка","value":0,"sortOrder":3,"settings":{}},{"id":"fabric_type_4_stenovaya_panel","label":"иск. кожа","value":0,"sortOrder":4,"settings":{}},{"id":"fabric_type_5_stenovaya_panel","label":"кожа (от 4000)","value":0,"sortOrder":5,"settings":{}},{"id":"fabric_type_6_stenovaya_panel","label":"иск. замша","value":0,"sortOrder":6,"settings":{}},{"id":"fabric_type_7_stenovaya_panel","label":"иск. мех","value":0,"sortOrder":7,"settings":{}},{"id":"fabric_type_8_stenovaya_panel","label":"велюр","value":0,"sortOrder":8,"settings":{}},{"id":"fabric_type_9_stenovaya_panel","label":"европейские фабрики (по запросу)","value":0,"sortOrder":9,"settings":{}}]},{"id":"radiusnye_ugly","name":"Радиусные углы","label":"Радиусные углы","inputType":"boolean","valueType":"boolean","showInKp":true,"kpRenderType":"boolean_presence","calcMode":"multiply","required":false,"sortOrder":7.0,"settings":{"trueValue":"0.18"},"options":[]},{"id":"vrezka_rozetok","name":"Врезка розеток","label":"Врезка розеток","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":8.0,"settings":{"min":"","max":4,"unitPrice":"27000"},"options":[]},{"id":"podsvetka","name":"Подсветка","label":"Подсветка","inputType":"quantity","valueType":"number","showInKp":true,"kpRenderType":"quantity","calcMode":"add","required":false,"sortOrder":9.0,"settings":{"min":"","max":20,"unitPrice":"5000"},"options":[]},{"id":"slozhnost_izdeliya","name":"Сложность изделия","label":"Сложность изделия","inputType":"select","valueType":"string","showInKp":false,"kpRenderType":"text","calcMode":"multiply","required":false,"sortOrder":10.0,"settings":{"slotsCount":1},"options":[{"id":"1.0","label":"1.0","value":0.1,"sortOrder":1.0,"settings":{}},{"id":"2.0","label":"2.0","value":0.2,"sortOrder":2.0,"settings":{}},{"id":"3.0","label":"3.0","value":0.3,"sortOrder":3.0,"settings":{}},{"id":"4.0","label":"4.0","value":0.4,"sortOrder":4.0,"settings":{}}]},{"id":"comments_stenovaya_panel","name":"Комментарии","label":"Комментарии","inputType":"text","valueType":"string","showInKp":true,"kpRenderType":"","calcMode":"none","required":false,"sortOrder":110.0,"settings":{"multiline":true,"placeholder":"Комментарий (необязательно)"},"options":[]}]}];

const SETTINGS = {
  submitMode: "test",
  maxImageSizeMb: 8
};

const root = document.getElementById("fd-calculator-root");

const state = {
  catalog: EMBEDDED_CATALOG,
  product: null,
  values: {},
  image: null,
  contactMethod: "whatsapp",
  items: []
};

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[c]));

const money = n =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 })
    .format(Math.round(n || 0)) + " ₽";

const toNum = value => {
  const n = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
};

function boot() {
  renderShell();
  renderProducts();
}

function renderShell() {
  root.innerHTML = `
    <div class="fd-version">v3.1</div><div class="fd-shell">
      <div class="fd-top">
        <img class="fd-logo" src="./assets/logo.png" alt="Forma Dom">
        <div class="fd-top-title">
          <strong>КАЛЬКУЛЯТОР МЕБЕЛИ</strong>
          <span>Предварительный расчёт стоимости</span>
        </div>
      </div>

      <div class="fd-progress">
        ${[
          ["1","Изделие","Выбор типа"],
          ["2","Конфигурация","Параметры"],
          ["3","Опции","Детали"],
          ["4","Итог","Стоимость"]
        ].map((x,i)=>`
          <div class="fd-step ${i===0?"active":""}" data-step="${i+1}">
            <div class="fd-step-circle">${x[0]}</div>
            <strong>${x[1]}</strong><small>${x[2]}</small>
          </div>`).join("")}
      </div>

      <div class="fd-main">
        <section class="fd-card fd-products-card">
          <h3 class="fd-card-title">Выберите изделие</h3>
          <div class="fd-products"></div>
        </section>

        <section class="fd-card fd-config">
          <h2 class="fd-product-name">Выберите изделие</h2>
          <div class="fd-fields"><div class="fd-empty">Слева выберите тип мебели.</div></div>
          <button type="button" class="fd-secondary fd-add-item" disabled>Добавить изделие в запрос</button>
        </section>

        <aside class="fd-card fd-summary">
          <h3 class="fd-card-title">Ваш запрос</h3>
          <div class="fd-current-summary">Конфигурация пока не выбрана.</div>
          <div class="fd-current-price-row" style="display:none">
            <span>Стоимость изделия</span>
            <strong class="fd-current-price">—</strong>
          </div>

          <div class="fd-divider"></div>
          <div class="fd-cart-title">Добавленные изделия</div>
          <div class="fd-cart-list"><div class="fd-cart-empty">Пока ничего не добавлено.</div></div>

          <div class="fd-divider"></div>
          <div class="fd-price-label">Общий итог</div>
          <div class="fd-price">—</div>
          <button type="button" class="fd-primary fd-get">Уточнить КП</button>
          <div class="fd-note">Цена предварительная.<br>Окончательную стоимость подтвердит менеджер.</div>
        </aside>
      </div>

      <section class="fd-card fd-lead" id="fd-lead">
        <div class="fd-lead-sub">Для уточнения КП заполните данные, и менеджер с вами свяжется</div>

        <div class="fd-lead-form">
          <input class="fd-line-input fd-name" type="text" placeholder="Ваше имя">

          <div class="fd-contact-tabs">
            <button type="button" class="fd-contact-tab active" data-method="whatsapp">WhatsApp</button>
            <button type="button" class="fd-contact-tab" data-method="phone">Телефон</button>
            <button type="button" class="fd-contact-tab" data-method="telegram">Telegram</button>
          </div>

          <input class="fd-line-input fd-phone" type="tel" placeholder="+7 (000) 000-00-00">
          <textarea class="fd-line-input fd-comment" style="height:72px;padding-top:18px;resize:none" placeholder="Комментарий (необязательно)"></textarea>

          <button type="button" class="fd-submit-big fd-submit">Отправить</button>
          <div class="fd-privacy">Нажимая, вы соглашаетесь с обработкой персональных данных</div>
          <div class="fd-status"></div>
        </div>
      </section>
    </div>`;

  root.querySelector(".fd-fields").addEventListener("input", handleChange);
  root.querySelector(".fd-fields").addEventListener("change", handleChange);

  root.querySelector(".fd-products").addEventListener("click", event => {
    const button = event.target.closest(".fd-product");
    if (button) selectProduct(button.dataset.id);
  });

  root.querySelector(".fd-add-item").addEventListener("click", addCurrentItem);

  root.querySelector(".fd-cart-list").addEventListener("click", event => {
    const button = event.target.closest(".fd-remove-item");
    if (button) removeItem(button.dataset.uid);
  });

  root.querySelector(".fd-get").addEventListener("click", () => {
    root.querySelector("#fd-lead").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  root.querySelector(".fd-submit").addEventListener("click", submitLead);

  root.querySelector(".fd-contact-tabs").addEventListener("click", event => {
    const button = event.target.closest(".fd-contact-tab");
    if (!button) return;

    state.contactMethod = button.dataset.method;
    root.querySelectorAll(".fd-contact-tab").forEach(tab =>
      tab.classList.toggle("active", tab === button)
    );
  });
}

function renderProducts() {
  root.querySelector(".fd-products").innerHTML = state.catalog
    .map(product =>
      `<button type="button" class="fd-product" data-id="${esc(product.id)}">${esc(product.name)}</button>`
    )
    .join("");
}

function visibleParams() {
  return (state.product?.params || []).filter(param => {
    const name = String(param.name || "").trim().toLowerCase();
    const label = String(param.label || "").trim().toLowerCase();

    if (param.calcMode === "base_price") return false;
    if (param.inputType === "image") return false;
    if (name === "стартовая цена") return false;
    if (name.includes("сложност") || label.includes("сложност")) return false;
    if (name === "каркас" || label === "каркас") return false;

    return true;
  });
}

function getMainOptions(param) {
  return (param.options || []).filter(option => !option.settings?.isExtra);
}

function isFinishParam(param) {
  const text = `${param.name || ""} ${param.label || ""}`.trim().toLowerCase();
  return text.includes("отделк");
}

function renderFinishCards(param) {
  return `<div class="fd-finish-grid">${getMainOptions(param).map(option => `
    <label class="fd-finish-card">
      <input type="checkbox" data-param="${esc(param.id)}" value="${esc(option.id)}">
      <span class="fd-finish-card-inner">
        <span class="fd-finish-head">
          <span class="fd-finish-check"></span>
          <strong>${esc(option.label)}</strong>
        </span>
        ${option.image
          ? `<img class="fd-finish-image" src="${esc(option.image)}" alt="${esc(option.label)}" loading="lazy">`
          : `<span class="fd-finish-placeholder">Фото скоро появится</span>`
        }
      </span>
    </label>`).join("")}</div>`;
}

function optionPriceText(param, option) {
  const value = toNum(option.value);
  if (!value) return "";

  if (param.calcMode === "multiply") return "";
  if (param.calcMode === "add") return `+${money(value)}`;

  return "";
}

function renderField(param) {
  const required = param.required ? '<span class="fd-required">*</span>' : "";
  let control = "";

  if (isFinishParam(param)) {
    control = renderFinishCards(param);
  } else if (param.inputType === "single_choice") {
    control = `<div class="fd-options">${getMainOptions(param).map(option => `
      <label class="fd-chip">
        <input type="radio" name="${esc(param.id)}" data-param="${esc(param.id)}" value="${esc(option.id)}">
        <span>
          <b class="fd-chip-text">${esc(option.label)}</b>
          <em class="fd-chip-value"></em>
        </span>
      </label>`).join("")}</div>`;
  } else if (param.inputType === "select" || param.inputType === "linked_select") {
    control = `<select class="fd-select is-empty" data-param="${esc(param.id)}">
      <option value="">Выберите</option>
      ${getMainOptions(param).map(option =>
        `<option value="${esc(option.id)}">${esc(option.label)}</option>`
      ).join("")}
    </select>`;
  } else if (param.inputType === "multi_select_inline") {
    control = `<div class="fd-options">${getMainOptions(param).map(option => `
      <label class="fd-chip">
        <input type="checkbox" data-param="${esc(param.id)}" value="${esc(option.id)}">
        <span>
          <b class="fd-chip-text">${esc(option.label)}</b>
          <em class="fd-chip-value">${esc(optionPriceText(param, option))}</em>
        </span>
      </label>`).join("")}</div>`;
  } else if (param.inputType === "boolean") {
    const booleanLabel = param.settings?.clientBooleanLabel || "Добавить";
    control = `<label class="fd-check">
      <input type="checkbox" data-param="${esc(param.id)}">
      <span>${esc(booleanLabel)}</span>
    </label>`;
  } else if (param.inputType === "quantity") {
    control = `<input
      class="fd-input"
      type="number"
      min="${Number(param.settings?.min ?? 0)}"
      max="${param.settings?.max || ""}"
      step="1"
      value=""
      placeholder="Количество"
      data-param="${esc(param.id)}">`;
  } else if (param.inputType === "dimensions") {
    const used = param.settings?.fields || ["width","depth","height"];
    const labels = { width:"Ширина", depth:"Глубина", height:"Высота" };

    control = `<div class="fd-dims">${used.map(key => `
      <div class="fd-dim">
        <label>${labels[key] || key}</label>
        <div class="fd-dim-wrap">
          <input
            class="fd-input"
            type="number"
            min="0"
            step="10"
            value=""
            placeholder="Введите"
            data-param="${esc(param.id)}"
            data-dim="${esc(key)}">
          <span>мм</span>
        </div>
      </div>`).join("")}</div>`;
  } else if (param.inputType === "number") {
    control = `<input class="fd-input" type="number" value="" placeholder="Введите значение" data-param="${esc(param.id)}">`;
  } else if (param.inputType === "text" && param.settings?.multiline) {
    control = `<textarea class="fd-textarea fd-input" data-param="${esc(param.id)}" placeholder="${esc(param.settings?.placeholder || "")}"></textarea>`;
  } else {
    control = `<input class="fd-input" type="text" value="" data-param="${esc(param.id)}">`;
  }

  const full = (isFinishParam(param) || ["dimensions","multi_select_inline","single_choice"].includes(param.inputType)) ? "full" : "";
  return `<div class="fd-field ${full}">
    <div class="fd-label">${esc(param.label || param.name)} ${required}</div>
    ${control}
  </div>`;
}

function renderUploadField() {
  return `
    <div class="fd-upload">
      <div class="fd-label">Фото или эскиз изделия</div>
      <div class="fd-upload-row">
        <label class="fd-upload-btn">
          Загрузить файл
          <input type="file" class="fd-image-input" accept="image/jpeg,image/png,image/webp">
        </label>
        <div class="fd-upload-hint">JPG, PNG или WEBP, до ${SETTINGS.maxImageSizeMb} МБ</div>
      </div>
      <div class="fd-preview">
        <img alt="Превью загруженного изображения">
        <button type="button" class="fd-remove-image" aria-label="Удалить">×</button>
      </div>
    </div>`;
}

function selectProduct(id) {
  state.product = state.catalog.find(product => product.id === id);
  state.values = {};
  state.image = null;

  root.querySelectorAll(".fd-product").forEach(button =>
    button.classList.toggle("active", button.dataset.id === id)
  );

  root.querySelector(".fd-product-name").textContent =
    state.product?.name || "Выберите изделие";

  root.querySelector(".fd-fields").innerHTML =
    visibleParams().map(renderField).join("") + renderUploadField();

  root.querySelector(".fd-add-item").disabled = false;

  bindImageUpload();
  setActiveStep(2);
  update();
}

function bindImageUpload() {
  const input = root.querySelector(".fd-image-input");
  const preview = root.querySelector(".fd-preview");
  const image = preview.querySelector("img");
  const remove = root.querySelector(".fd-remove-image");

  input.addEventListener("change", async () => {
    const file = input.files?.[0];
    if (!file) return;

    if (file.size > SETTINGS.maxImageSizeMb * 1024 * 1024) {
      showStatus(`Файл больше ${SETTINGS.maxImageSizeMb} МБ.`);
      input.value = "";
      return;
    }

    state.image = {
      name: file.name,
      type: file.type,
      size: file.size,
      dataUrl: await fileToDataUrl(file)
    };

    image.src = state.image.dataUrl;
    preview.style.display = "block";
    update();
  });

  remove.addEventListener("click", () => {
    state.image = null;
    input.value = "";
    image.removeAttribute("src");
    preview.style.display = "none";
    update();
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function setActiveStep(number) {
  root.querySelectorAll(".fd-step").forEach((element, index) =>
    element.classList.toggle("active", index < number)
  );
}

function selectedOption(param, id) {
  return getMainOptions(param).find(option => String(option.id) === String(id)) || null;
}

function calculateCurrent() {
  if (!state.product) return 0;

  let rawBasePrice = 0;

  state.product.params.forEach(param => {
    if (param.calcMode === "base_price") {
      rawBasePrice = getCalcValue(param, state.values[param.id]) || 0;
    }
  });

  const dimensionsBasePrice =
    applyDimensionsToBasePrice(state.product, state.values, rawBasePrice);

  let addSum = 0;
  let multiplyAddSum = 0;

  state.product.params.forEach(param => {
    const calc = getCalcValue(param, state.values[param.id]);

    if (param.calcMode === "add") {
      addSum += calc;
    } else if (param.calcMode === "multiply") {
      multiplyAddSum += dimensionsBasePrice * calc;
    } else if (param.calcMode === "custom_support") {
      addSum += calcCustomSupport(param, state.values[param.id], dimensionsBasePrice, state.product, state.values);
    }
  });

  return round2(dimensionsBasePrice + addSum + multiplyAddSum);
}

function applyDimensionsToBasePrice(product, allValues, basePrice) {
  let result = Number(basePrice || 0);
  if (!result) return 0;

  const dimensionsParam = (product.params || []).find(param => param.inputType === "dimensions");
  if (!dimensionsParam) return result;

  const values = allValues[dimensionsParam.id] || {};
  const width = toNum(values.width);
  const depth = toNum(values.depth);
  const height = toNum(values.height);

  if (dimensionsParam.settings?.sumBeforeMultiply) {
    let sum = 0;
    if (dimensionsParam.settings?.useWidth && width > 0) sum += width;
    if (dimensionsParam.settings?.useDepth && depth > 0) sum += depth;
    if (dimensionsParam.settings?.useHeight && height > 0) sum += height;
    if (sum > 0) result *= sum / 1000;
    return result;
  }

  if (dimensionsParam.settings?.useWidth && width > 0) result *= width / 1000;
  if (dimensionsParam.settings?.useDepth && depth > 0) result *= depth / 1000;
  if (dimensionsParam.settings?.useHeight && height > 0) result *= height / 1000;

  return result;
}

function calcCustomSupport(param, value, basePrice, product, allValues) {
  const option = selectedOption(param, value);
  if (!option) return 0;

  const mode = option.settings?.pricingMode || "fixed";
  const raw = toNum(option.value);

  if (mode === "none") return 0;
  if (mode === "fixed") return raw;
  if (mode === "percent_base") return basePrice * raw;

  if (mode === "per_width_meter") {
    const dimensionsParam = (product.params || []).find(p => p.inputType === "dimensions");
    const width = toNum(allValues?.[dimensionsParam?.id]?.width);
    return width > 0 ? (width / 1000) * raw : 0;
  }

  return raw;
}

function getCalcValue(param, value) {
  switch (param.inputType) {
    case "select":
    case "single_choice": {
      const option = selectedOption(param, value);
      return option ? toNum(option.value) : 0;
    }

    case "multi_select_inline": {
      if (!Array.isArray(value)) return 0;
      return value.reduce((sum, optionId) => {
        const option = selectedOption(param, optionId);
        return sum + (option ? toNum(option.value) : 0);
      }, 0);
    }

    case "text":
    case "number":
      if (param.calcMode === "base_price") return toNum(param.settings?.baseValue);
      if (["base_price","add","multiply"].includes(param.calcMode)) return toNum(value);
      return 0;

    case "boolean":
      return value ? toNum(param.settings?.trueValue) : 0;

    case "quantity":
      return toNum(value) * toNum(param.settings?.unitPrice);

    case "dimensions":
      return 0;

    case "linked_select": {
      const optionId = value && typeof value === "object" ? value.main : value;
      const option = selectedOption(param, optionId);
      return option ? toNum(option.value) : 0;
    }

    default:
      return 0;
  }
}

function round2(value) {
  return Math.round((Number(value || 0) + Number.EPSILON) * 100) / 100;
}

function currentSummaryRows() {
  if (!state.product) return [];

  const rows = [["Изделие", state.product.name]];

  visibleParams().forEach(param => {
    const value = state.values[param.id];

    if (
      value === undefined ||
      value === "" ||
      value === false ||
      value === 0 ||
      (Array.isArray(value) && !value.length)
    ) return;

    let text = "";

    if (param.inputType === "dimensions") {
      const labels = { width:"Ш", depth:"Г", height:"В" };
      text = Object.entries(value)
        .filter(([,entry]) => Number(entry) > 0)
        .map(([key,entry]) => `${labels[key] || key}: ${entry} мм`)
        .join(", ");
    } else if (param.inputType === "boolean") {
      text = value ? (param.settings?.clientBooleanLabel || "Да") : "";
    } else if (Array.isArray(value)) {
      text = value
        .map(id => selectedOption(param, id)?.label)
        .filter(Boolean)
        .join(", ");
    } else if (
      param.inputType === "select" ||
      param.inputType === "linked_select" ||
      param.inputType === "single_choice"
    ) {
      const optionId = value && typeof value === "object" ? value.main : value;
      text = selectedOption(param, optionId)?.label || "";
    } else {
      text = String(value);
    }

    if (text) rows.push([param.label || param.name, text]);
  });

  if (state.image) rows.push(["Фото/эскиз", state.image.name]);

  return rows;
}

function createCurrentItem() {
  return {
    uid: `item_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
    productId: state.product.id,
    productName: state.product.name,
    values: JSON.parse(JSON.stringify(state.values)),
    image: state.image ? { ...state.image } : null,
    price: calculateCurrent(),
    summaryRows: currentSummaryRows()
  };
}

function addCurrentItem() {
  if (!state.product) {
    showStatus("Сначала выберите изделие.");
    return;
  }

  state.items.push(createCurrentItem());
  renderCart();
  resetCurrentConfiguration();
  setActiveStep(4);
}

function resetCurrentConfiguration() {
  state.product = null;
  state.values = {};
  state.image = null;

  root.querySelectorAll(".fd-product").forEach(button =>
    button.classList.remove("active")
  );

  root.querySelector(".fd-product-name").textContent = "Выберите следующее изделие";
  root.querySelector(".fd-fields").innerHTML =
    '<div class="fd-empty">Выберите изделие слева, чтобы добавить ещё одну позицию.</div>';
  root.querySelector(".fd-add-item").disabled = true;

  update();
}

function removeItem(uid) {
  state.items = state.items.filter(item => item.uid !== uid);
  renderCart();
  update();
}

function totalPrice() {
  return state.items.reduce((sum, item) => sum + Number(item.price || 0), 0);
}

function renderCart() {
  const list = root.querySelector(".fd-cart-list");

  if (!state.items.length) {
    list.innerHTML = '<div class="fd-cart-empty">Пока ничего не добавлено.</div>';
    return;
  }

  list.innerHTML = state.items.map((item, index) => `
    <div class="fd-cart-item">
      <div>
        <strong>${index + 1}. ${esc(item.productName)}</strong>
        <small>${money(item.price)}</small>
      </div>
      <button type="button" class="fd-remove-item" data-uid="${esc(item.uid)}">Удалить</button>
    </div>
  `).join("");
}

function update() {
  const rows = currentSummaryRows();

  root.querySelector(".fd-current-summary").innerHTML = rows.length
    ? rows.map(([label,value]) =>
        `<div class="fd-summary-row"><span>${esc(label)}</span><span>${esc(value)}</span></div>`
      ).join("")
    : "Конфигурация пока не выбрана.";

  renderCart();

  const currentPrice = state.product ? calculateCurrent() : 0;
  const total = totalPrice() + currentPrice;

  const currentPriceRow = root.querySelector(".fd-current-price-row");
  const currentPriceText = root.querySelector(".fd-current-price");

  if (state.product && currentPrice > 0) {
    currentPriceText.textContent = money(currentPrice);
    currentPriceRow.style.display = "flex";
  } else {
    currentPriceText.textContent = "—";
    currentPriceRow.style.display = "none";
  }

  root.querySelector(".fd-price").textContent =
    total > 0 ? money(total) : "—";

  if (state.product) setActiveStep(rows.length > 2 ? 3 : 2);
  if (state.items.length) setActiveStep(4);
}

function handleChange(event) {
  const element = event.target;
  const paramId = element.dataset.param;

  if (!paramId || !state.product) return;

  const param = state.product.params.find(item => item.id === paramId);
  if (!param) return;

  if (element.tagName === "SELECT") {
    element.classList.toggle("is-empty", element.value === "");
    element.classList.toggle("has-value", element.value !== "");
  }

  if (param.inputType === "single_choice") {
    state.values[paramId] = element.value;
  } else if (param.inputType === "multi_select_inline") {
    state.values[paramId] = [
      ...root.querySelectorAll(`input[data-param="${CSS.escape(paramId)}"]:checked`)
    ].map(input => input.value);
  } else if (param.inputType === "boolean") {
    state.values[paramId] = element.checked;
  } else if (param.inputType === "quantity" || param.inputType === "number") {
    state.values[paramId] = element.value === "" ? "" : Number(element.value);
  } else if (param.inputType === "dimensions") {
    state.values[paramId] = state.values[paramId] || {};
    state.values[paramId][element.dataset.dim] =
      element.value === "" ? "" : Number(element.value);
  } else {
    state.values[paramId] = element.value;
  }

  update();
}

function allItemsForSubmit() {
  const items = [...state.items];

  if (state.product) {
    items.push(createCurrentItem());
  }

  return items;
}

function requestSummaryText(items) {
  const lines = [];

  items.forEach((item, index) => {
    lines.push(`ИЗДЕЛИЕ ${index + 1}: ${item.productName}`);
    item.summaryRows.slice(1).forEach(([label,value]) => {
      lines.push(`${label}: ${value}`);
    });
    lines.push(`Стоимость: ${money(item.price)}`);
    lines.push("");
  });

  lines.push(`ОБЩИЙ ИТОГ: ${money(items.reduce((sum,item) => sum + Number(item.price || 0), 0))}`);

  return lines.join("\n");
}

function showStatus(text) {
  const element = root.querySelector(".fd-status");
  element.textContent = text;
  element.style.display = "block";
}

let activeLeadRequestId = null;

function setSubmitLoading(isLoading) {
  const button = root.querySelector(".fd-submit");
  if (!button) return;

  button.disabled = isLoading;
  button.textContent = isLoading ? "Отправляем..." : "Отправить";
}

function submitLead() {
  const name = root.querySelector(".fd-name").value.trim();
  const phone = root.querySelector(".fd-phone").value.trim();
  const comment = root.querySelector(".fd-comment").value.trim();
  const items = allItemsForSubmit();

  if (!items.length) return showStatus("Добавьте хотя бы одно изделие.");
  if (!name || !phone) return showStatus("Заполните имя и номер телефона.");

  const requestId = `fd-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const payload = {
    requestId,
    name,
    phone,
    contactMethod: state.contactMethod,
    comment,
    items,
    totalPrice: items.reduce((sum,item) => sum + Number(item.price || 0), 0),
    configuration: requestSummaryText(items),
    source: "Калькулятор мебели Forma Dom",
    pageUrl: document.referrer || window.location.href
  };

  activeLeadRequestId = requestId;
  setSubmitLoading(true);
  showStatus("Отправляем заявку...");

  if (window.parent === window) {
    setSubmitLoading(false);
    showStatus("Откройте калькулятор на странице сайта Tilda для отправки заявки.");
    return;
  }

  window.parent.postMessage({
    type: "forma-dom-calculator-lead",
    payload
  }, "*");

  window.setTimeout(() => {
    if (activeLeadRequestId !== requestId) return;
    activeLeadRequestId = null;
    setSubmitLoading(false);
    showStatus("Не удалось подтвердить отправку. Попробуйте ещё раз.");
  }, 20000);
}

window.addEventListener("message", event => {
  const data = event.data || {};
  if (!data.requestId || data.requestId !== activeLeadRequestId) return;

  if (data.type === "forma-dom-calculator-lead-success") {
    activeLeadRequestId = null;
    setSubmitLoading(false);
    showStatus("Спасибо! Ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время.");
  }

  if (data.type === "forma-dom-calculator-lead-error") {
    activeLeadRequestId = null;
    setSubmitLoading(false);
    showStatus(data.message || "Не удалось отправить заявку. Попробуйте ещё раз.");
  }
});

boot();


/* v3.1 — automatic iframe height for Tilda */
(function setupIframeAutoHeight() {
  let lastHeight = 0;
  let rafId = 0;

  function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;
    const root = document.getElementById("fd-calculator-root");

    return Math.ceil(Math.max(
      body?.scrollHeight || 0,
      body?.offsetHeight || 0,
      html?.scrollHeight || 0,
      html?.offsetHeight || 0,
      html?.clientHeight || 0,
      root?.scrollHeight || 0,
      root?.offsetHeight || 0
    ));
  }

  function postHeight(force = false) {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const height = getDocumentHeight();
      if (!height || (!force && Math.abs(height - lastHeight) < 2)) return;

      lastHeight = height;
      window.parent.postMessage({
        type: "forma-dom-calculator-height",
        height
      }, "*");
    });
  }

  window.addEventListener("load", () => {
    postHeight(true);
    setTimeout(() => postHeight(true), 300);
    setTimeout(() => postHeight(true), 1000);
  });

  window.addEventListener("resize", () => postHeight(true));

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(() => postHeight());
    observer.observe(document.documentElement);
    if (document.body) observer.observe(document.body);
    const root = document.getElementById("fd-calculator-root");
    if (root) observer.observe(root);
  }

  if ("MutationObserver" in window) {
    const observer = new MutationObserver(() => postHeight());
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
  }

  document.addEventListener("change", () => setTimeout(() => postHeight(true), 50));
  document.addEventListener("click", () => setTimeout(() => postHeight(true), 80));
  document.addEventListener("input", () => setTimeout(() => postHeight(), 50));
})();

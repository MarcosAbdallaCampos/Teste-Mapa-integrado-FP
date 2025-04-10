var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CP_arquivo_padrao_1 = new ol.format.GeoJSON();
var features_CP_arquivo_padrao_1 = format_CP_arquivo_padrao_1.readFeatures(json_CP_arquivo_padrao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CP_arquivo_padrao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CP_arquivo_padrao_1.addFeatures(features_CP_arquivo_padrao_1);
var lyr_CP_arquivo_padrao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CP_arquivo_padrao_1, 
                style: style_CP_arquivo_padrao_1,
                popuplayertitle: 'CP_arquivo_padrao',
                interactive: true,
                title: '<img src="styles/legend/CP_arquivo_padrao_1.png" /> CP_arquivo_padrao'
            });
var format_CPnometalhoes_2 = new ol.format.GeoJSON();
var features_CPnometalhoes_2 = format_CPnometalhoes_2.readFeatures(json_CPnometalhoes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPnometalhoes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPnometalhoes_2.addFeatures(features_CPnometalhoes_2);
cluster_CPnometalhoes_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CPnometalhoes_2
});
var lyr_CPnometalhoes_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CPnometalhoes_2, 
                style: style_CPnometalhoes_2,
                popuplayertitle: 'CPnometalhoes',
                interactive: false,
                title: '<img src="styles/legend/CPnometalhoes_2.png" /> CPnometalhoes'
            });
var format_FPQualidade_do_pasto_3 = new ol.format.GeoJSON();
var features_FPQualidade_do_pasto_3 = format_FPQualidade_do_pasto_3.readFeatures(json_FPQualidade_do_pasto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPQualidade_do_pasto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPQualidade_do_pasto_3.addFeatures(features_FPQualidade_do_pasto_3);
var lyr_FPQualidade_do_pasto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPQualidade_do_pasto_3, 
                style: style_FPQualidade_do_pasto_3,
                popuplayertitle: 'FPQualidade_do_pasto',
                interactive: false,
    title: 'FPQualidade_do_pasto<br />\
    <img src="styles/legend/FPQualidade_do_pasto_3_0.png" /> Bom<br />\
    <img src="styles/legend/FPQualidade_do_pasto_3_1.png" /> Moderado<br />\
    <img src="styles/legend/FPQualidade_do_pasto_3_2.png" /> Ruim<br />' });
var format_FPTipo_do_pasto_4 = new ol.format.GeoJSON();
var features_FPTipo_do_pasto_4 = format_FPTipo_do_pasto_4.readFeatures(json_FPTipo_do_pasto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPTipo_do_pasto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPTipo_do_pasto_4.addFeatures(features_FPTipo_do_pasto_4);
var lyr_FPTipo_do_pasto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPTipo_do_pasto_4, 
                style: style_FPTipo_do_pasto_4,
                popuplayertitle: 'FPTipo_do_pasto',
                interactive: false,
    title: 'FPTipo_do_pasto<br />\
    <img src="styles/legend/FPTipo_do_pasto_4_0.png" /> Braquiária<br />\
    <img src="styles/legend/FPTipo_do_pasto_4_1.png" /> Panicus<br />' });
var format_FPReforma_5 = new ol.format.GeoJSON();
var features_FPReforma_5 = format_FPReforma_5.readFeatures(json_FPReforma_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPReforma_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPReforma_5.addFeatures(features_FPReforma_5);
var lyr_FPReforma_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPReforma_5, 
                style: style_FPReforma_5,
                popuplayertitle: 'FPReforma',
                interactive: false,
    title: 'FPReforma<br />\
    <img src="styles/legend/FPReforma_5_0.png" /> Não<br />\
    <img src="styles/legend/FPReforma_5_1.png" /> Sim<br />' });
var format_FPSituao_6 = new ol.format.GeoJSON();
var features_FPSituao_6 = format_FPSituao_6.readFeatures(json_FPSituao_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPSituao_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPSituao_6.addFeatures(features_FPSituao_6);
var lyr_FPSituao_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPSituao_6, 
                style: style_FPSituao_6,
                popuplayertitle: 'FPSituação',
                interactive: false,
    title: 'FPSituação<br />\
    <img src="styles/legend/FPSituao_6_0.png" /> OK<br />\
    <img src="styles/legend/FPSituao_6_1.png" /> Sobreutilizado<br />\
    <img src="styles/legend/FPSituao_6_2.png" /> Subutilizado<br />' });
var format_FPLucroha_7 = new ol.format.GeoJSON();
var features_FPLucroha_7 = format_FPLucroha_7.readFeatures(json_FPLucroha_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPLucroha_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPLucroha_7.addFeatures(features_FPLucroha_7);
var lyr_FPLucroha_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPLucroha_7, 
                style: style_FPLucroha_7,
                popuplayertitle: 'FPLucroha ',
                interactive: false,
    title: 'FPLucroha <br />\
    <img src="styles/legend/FPLucroha_7_0.png" /> -1540 - -540<br />\
    <img src="styles/legend/FPLucroha_7_1.png" /> -540 - 460<br />\
    <img src="styles/legend/FPLucroha_7_2.png" /> 460 - 1460<br />\
    <img src="styles/legend/FPLucroha_7_3.png" /> 1460 - 2460<br />\
    <img src="styles/legend/FPLucroha_7_4.png" /> 2460 - 3460<br />\
    <img src="styles/legend/FPLucroha_7_5.png" /> 3460 - 4460<br />' });
var format_FPInvestimento_8 = new ol.format.GeoJSON();
var features_FPInvestimento_8 = format_FPInvestimento_8.readFeatures(json_FPInvestimento_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPInvestimento_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPInvestimento_8.addFeatures(features_FPInvestimento_8);
var lyr_FPInvestimento_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FPInvestimento_8, 
                style: style_FPInvestimento_8,
                popuplayertitle: 'FPInvestimento',
                interactive: false,
    title: 'FPInvestimento<br />\
    <img src="styles/legend/FPInvestimento_8_0.png" /> 0 - 0<br />\
    <img src="styles/legend/FPInvestimento_8_1.png" /> 0 - 200<br />\
    <img src="styles/legend/FPInvestimento_8_2.png" /> 200 - 400<br />\
    <img src="styles/legend/FPInvestimento_8_3.png" /> 400 - 700<br />\
    <img src="styles/legend/FPInvestimento_8_4.png" /> 700 - 1000<br />' });
var format_FP_arquivo_padro_com_Excel_9 = new ol.format.GeoJSON();
var features_FP_arquivo_padro_com_Excel_9 = format_FP_arquivo_padro_com_Excel_9.readFeatures(json_FP_arquivo_padro_com_Excel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FP_arquivo_padro_com_Excel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FP_arquivo_padro_com_Excel_9.addFeatures(features_FP_arquivo_padro_com_Excel_9);
var lyr_FP_arquivo_padro_com_Excel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FP_arquivo_padro_com_Excel_9, 
                style: style_FP_arquivo_padro_com_Excel_9,
                popuplayertitle: 'FP_arquivo_padrão_com_Excel',
                interactive: true,
                title: '<img src="styles/legend/FP_arquivo_padro_com_Excel_9.png" /> FP_arquivo_padrão_com_Excel'
            });
var group_ArquivointegradocomExcel = new ol.layer.Group({
                                layers: [lyr_FPQualidade_do_pasto_3,lyr_FPTipo_do_pasto_4,lyr_FPReforma_5,lyr_FPSituao_6,lyr_FPLucroha_7,lyr_FPInvestimento_8,lyr_FP_arquivo_padro_com_Excel_9,],
                                fold: "open",
                                title: 'Arquivo integrado com Excel'});
var group_FazendaCerroPorkml = new ol.layer.Group({
                                layers: [lyr_CP_arquivo_padrao_1,lyr_CPnometalhoes_2,],
                                fold: "open",
                                title: 'Fazenda Cerro Porã kml'});

lyr_GoogleSatellite_0.setVisible(true);lyr_CP_arquivo_padrao_1.setVisible(true);lyr_CPnometalhoes_2.setVisible(true);lyr_FPQualidade_do_pasto_3.setVisible(true);lyr_FPTipo_do_pasto_4.setVisible(true);lyr_FPReforma_5.setVisible(true);lyr_FPSituao_6.setVisible(true);lyr_FPLucroha_7.setVisible(true);lyr_FPInvestimento_8.setVisible(true);lyr_FP_arquivo_padro_com_Excel_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_FazendaCerroPorkml,group_ArquivointegradocomExcel];
lyr_CP_arquivo_padrao_1.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Area': 'Area', 'Fazenda': 'Fazenda', });
lyr_CPnometalhoes_2.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'height': 'height', 'text': 'text', 'angle': 'angle', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', 'path': 'path', });
lyr_FPQualidade_do_pasto_3.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', });
lyr_FPTipo_do_pasto_4.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', });
lyr_FPReforma_5.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', });
lyr_FPSituao_6.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', });
lyr_FPLucroha_7.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', 'Ano2': 'Ano2', });
lyr_FPInvestimento_8.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', });
lyr_FP_arquivo_padro_com_Excel_9.set('fieldAliases', {'fid': 'fid', 'text': 'text', 'Fazenda': 'Fazenda', 'Area': 'Area', 'Ano': 'Ano', 'Tipo de pasto': 'Tipo de pasto', 'Qualidade do pasto': 'Qualidade do pasto', 'Reforma': 'Reforma', 'Produtividade kg/há': 'Produtividade kg/há', 'Capacidade UA/ha': 'Capacidade UA/ha', 'Lotação atual UA/ha': 'Lotação atual UA/ha', 'Situacao': 'Situacao', 'Investimento mil R$': 'Investimento mil R$', 'Lucro R$/ha': 'Lucro R$/ha', 'Observações': 'Observações', });
lyr_CP_arquivo_padrao_1.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Area': 'TextEdit', 'Fazenda': 'TextEdit', });
lyr_CPnometalhoes_2.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'space': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'TextEdit', 'color24': 'TextEdit', 'transparen': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'height': 'TextEdit', 'text': 'TextEdit', 'angle': 'TextEdit', 'widthscale': 'TextEdit', 'oblique': 'TextEdit', 'style': 'TextEdit', 'textgen': 'TextEdit', 'alignh': 'TextEdit', 'alignv': 'TextEdit', 'interlin': 'TextEdit', 'path': 'TextEdit', });
lyr_FPQualidade_do_pasto_3.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', });
lyr_FPTipo_do_pasto_4.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', });
lyr_FPReforma_5.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', });
lyr_FPSituao_6.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', });
lyr_FPLucroha_7.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', 'Ano2': 'DateTime', });
lyr_FPInvestimento_8.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', });
lyr_FP_arquivo_padro_com_Excel_9.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', 'Fazenda': 'TextEdit', 'Area': 'TextEdit', 'Ano': 'Range', 'Tipo de pasto': 'TextEdit', 'Qualidade do pasto': 'TextEdit', 'Reforma': 'TextEdit', 'Produtividade kg/há': 'Range', 'Capacidade UA/ha': 'TextEdit', 'Lotação atual UA/ha': 'TextEdit', 'Situacao': 'TextEdit', 'Investimento mil R$': 'Range', 'Lucro R$/ha': 'Range', 'Observações': 'TextEdit', });
lyr_CP_arquivo_padrao_1.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Area': 'inline label - always visible', 'Fazenda': 'inline label - always visible', });
lyr_CPnometalhoes_2.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'space': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'linetype': 'hidden field', 'color': 'hidden field', 'ocolor': 'hidden field', 'color24': 'hidden field', 'transparen': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'thickness': 'hidden field', 'ext': 'hidden field', 'height': 'hidden field', 'text': 'hidden field', 'angle': 'hidden field', 'widthscale': 'hidden field', 'oblique': 'hidden field', 'style': 'hidden field', 'textgen': 'hidden field', 'alignh': 'hidden field', 'alignv': 'hidden field', 'interlin': 'hidden field', 'path': 'hidden field', });
lyr_FPQualidade_do_pasto_3.set('fieldLabels', {'fid': 'hidden field', 'text': 'hidden field', 'Fazenda': 'hidden field', 'Area': 'hidden field', 'Ano': 'hidden field', 'Tipo de pasto': 'hidden field', 'Qualidade do pasto': 'hidden field', 'Reforma': 'hidden field', 'Produtividade kg/há': 'hidden field', 'Capacidade UA/ha': 'hidden field', 'Lotação atual UA/ha': 'hidden field', 'Situacao': 'hidden field', 'Investimento mil R$': 'hidden field', 'Lucro R$/ha': 'hidden field', 'Observações': 'hidden field', });
lyr_FPTipo_do_pasto_4.set('fieldLabels', {'fid': 'hidden field', 'text': 'hidden field', 'Fazenda': 'hidden field', 'Area': 'hidden field', 'Ano': 'hidden field', 'Tipo de pasto': 'hidden field', 'Qualidade do pasto': 'hidden field', 'Reforma': 'hidden field', 'Produtividade kg/há': 'hidden field', 'Capacidade UA/ha': 'hidden field', 'Lotação atual UA/ha': 'hidden field', 'Situacao': 'hidden field', 'Investimento mil R$': 'hidden field', 'Lucro R$/ha': 'hidden field', 'Observações': 'hidden field', });
lyr_FPReforma_5.set('fieldLabels', {'fid': 'hidden field', 'text': 'hidden field', 'Fazenda': 'hidden field', 'Area': 'hidden field', 'Ano': 'hidden field', 'Tipo de pasto': 'hidden field', 'Qualidade do pasto': 'hidden field', 'Reforma': 'hidden field', 'Produtividade kg/há': 'hidden field', 'Capacidade UA/ha': 'hidden field', 'Lotação atual UA/ha': 'hidden field', 'Situacao': 'hidden field', 'Investimento mil R$': 'hidden field', 'Lucro R$/ha': 'hidden field', 'Observações': 'hidden field', });
lyr_FPSituao_6.set('fieldLabels', {'fid': 'hidden field', 'text': 'hidden field', 'Fazenda': 'hidden field', 'Area': 'hidden field', 'Ano': 'hidden field', 'Tipo de pasto': 'hidden field', 'Qualidade do pasto': 'hidden field', 'Reforma': 'hidden field', 'Produtividade kg/há': 'hidden field', 'Capacidade UA/ha': 'hidden field', 'Lotação atual UA/ha': 'hidden field', 'Situacao': 'hidden field', 'Investimento mil R$': 'hidden field', 'Lucro R$/ha': 'hidden field', 'Observações': 'hidden field', });
lyr_FPLucroha_7.set('fieldLabels', {'fid': 'hidden field', 'text': 'hidden field', 'Fazenda': 'hidden field', 'Area': 'hidden field', 'Ano': 'hidden field', 'Tipo de pasto': 'hidden field', 'Qualidade do pasto': 'hidden field', 'Reforma': 'hidden field', 'Produtividade kg/há': 'hidden field', 'Capacidade UA/ha': 'hidden field', 'Lotação atual UA/ha': 'hidden field', 'Situacao': 'hidden field', 'Investimento mil R$': 'hidden field', 'Lucro R$/ha': 'hidden field', 'Observações': 'hidden field', 'Ano2': 'hidden field', });
lyr_FPInvestimento_8.set('fieldLabels', {'fid': 'hidden field', 'text': 'hidden field', 'Fazenda': 'hidden field', 'Area': 'hidden field', 'Ano': 'hidden field', 'Tipo de pasto': 'hidden field', 'Qualidade do pasto': 'hidden field', 'Reforma': 'hidden field', 'Produtividade kg/há': 'hidden field', 'Capacidade UA/ha': 'hidden field', 'Lotação atual UA/ha': 'hidden field', 'Situacao': 'hidden field', 'Investimento mil R$': 'hidden field', 'Lucro R$/ha': 'hidden field', 'Observações': 'hidden field', });
lyr_FP_arquivo_padro_com_Excel_9.set('fieldLabels', {'fid': 'inline label - always visible', 'text': 'inline label - always visible', 'Fazenda': 'inline label - always visible', 'Area': 'inline label - always visible', 'Ano': 'inline label - always visible', 'Tipo de pasto': 'inline label - always visible', 'Qualidade do pasto': 'inline label - always visible', 'Reforma': 'inline label - always visible', 'Produtividade kg/há': 'inline label - always visible', 'Capacidade UA/ha': 'inline label - always visible', 'Lotação atual UA/ha': 'inline label - always visible', 'Situacao': 'inline label - always visible', 'Investimento mil R$': 'inline label - always visible', 'Lucro R$/ha': 'inline label - always visible', 'Observações': 'inline label - always visible', });
lyr_FP_arquivo_padro_com_Excel_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
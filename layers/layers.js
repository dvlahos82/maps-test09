var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_relief_rendered_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'relief_rendered<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/relief_rendered_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2347188.228804, 4709179.363611, 2714124.113295, 4898502.293546]
        })
    });
var lyr_Altitudezones_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Altitude zones<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Altitudezones_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2348815.196623, 4713091.386859, 2709145.409324, 4896664.403010]
        })
    });
var lyr_land_use_rendered_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'land_use_rendered<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/land_use_rendered_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2345485.512538, 4712330.244863, 2709453.640423, 4899748.597167]
        })
    });
var format_thessaly_ota_pop_distastika_4 = new ol.format.GeoJSON();
var features_thessaly_ota_pop_distastika_4 = format_thessaly_ota_pop_distastika_4.readFeatures(json_thessaly_ota_pop_distastika_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thessaly_ota_pop_distastika_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thessaly_ota_pop_distastika_4.addFeatures(features_thessaly_ota_pop_distastika_4);
var lyr_thessaly_ota_pop_distastika_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thessaly_ota_pop_distastika_4, 
                style: style_thessaly_ota_pop_distastika_4,
                popuplayertitle: 'thessaly_ota_pop_dist-astika',
                interactive: false,
    title: 'thessaly_ota_pop_dist-astika<br />\
    <img src="styles/legend/thessaly_ota_pop_distastika_4_0.png" /> Αστικός<br />\
    <img src="styles/legend/thessaly_ota_pop_distastika_4_1.png" /> Μη αστικός<br />' });
var format_thessaly_ota_pop_dist02oreina_5 = new ol.format.GeoJSON();
var features_thessaly_ota_pop_dist02oreina_5 = format_thessaly_ota_pop_dist02oreina_5.readFeatures(json_thessaly_ota_pop_dist02oreina_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thessaly_ota_pop_dist02oreina_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thessaly_ota_pop_dist02oreina_5.addFeatures(features_thessaly_ota_pop_dist02oreina_5);
var lyr_thessaly_ota_pop_dist02oreina_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thessaly_ota_pop_dist02oreina_5, 
                style: style_thessaly_ota_pop_dist02oreina_5,
                popuplayertitle: 'thessaly_ota_pop_dist02-oreina',
                interactive: false,
    title: 'thessaly_ota_pop_dist02-oreina<br />\
    <img src="styles/legend/thessaly_ota_pop_dist02oreina_5_0.png" /> Ημιορεινά<br />\
    <img src="styles/legend/thessaly_ota_pop_dist02oreina_5_1.png" /> Ορεινά<br />\
    <img src="styles/legend/thessaly_ota_pop_dist02oreina_5_2.png" /> Πεδινά<br />\
    <img src="styles/legend/thessaly_ota_pop_dist02oreina_5_3.png" /> Αστικά<br />' });
var format_gdpagriculture_6 = new ol.format.GeoJSON();
var features_gdpagriculture_6 = format_gdpagriculture_6.readFeatures(json_gdpagriculture_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gdpagriculture_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gdpagriculture_6.addFeatures(features_gdpagriculture_6);
var lyr_gdpagriculture_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gdpagriculture_6, 
                style: style_gdpagriculture_6,
                popuplayertitle: 'gdp agriculture',
                interactive: false,
    title: 'gdp agriculture<br />\
    <img src="styles/legend/gdpagriculture_6_0.png" /> Καρδίτσας<br />\
    <img src="styles/legend/gdpagriculture_6_1.png" /> Λάρισας<br />\
    <img src="styles/legend/gdpagriculture_6_2.png" /> Μαγνησίας<br />\
    <img src="styles/legend/gdpagriculture_6_3.png" /> Τρικάλων<br />' });
var format_thessaly_gdp_ind_distoutput_layer_7 = new ol.format.GeoJSON();
var features_thessaly_gdp_ind_distoutput_layer_7 = format_thessaly_gdp_ind_distoutput_layer_7.readFeatures(json_thessaly_gdp_ind_distoutput_layer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thessaly_gdp_ind_distoutput_layer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thessaly_gdp_ind_distoutput_layer_7.addFeatures(features_thessaly_gdp_ind_distoutput_layer_7);
var lyr_thessaly_gdp_ind_distoutput_layer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thessaly_gdp_ind_distoutput_layer_7, 
                style: style_thessaly_gdp_ind_distoutput_layer_7,
                popuplayertitle: 'thessaly_gdp_ind_dist — output_layer',
                interactive: false,
    title: 'thessaly_gdp_ind_dist — output_layer<br />\
    <img src="styles/legend/thessaly_gdp_ind_distoutput_layer_7_0.png" /> Καρδίτσας<br />\
    <img src="styles/legend/thessaly_gdp_ind_distoutput_layer_7_1.png" /> Λάρισας<br />\
    <img src="styles/legend/thessaly_gdp_ind_distoutput_layer_7_2.png" /> Μαγνησίας<br />\
    <img src="styles/legend/thessaly_gdp_ind_distoutput_layer_7_3.png" /> Τρικάλων<br />' });
var format_Communitysizebyaltitude_8 = new ol.format.GeoJSON();
var features_Communitysizebyaltitude_8 = format_Communitysizebyaltitude_8.readFeatures(json_Communitysizebyaltitude_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communitysizebyaltitude_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communitysizebyaltitude_8.addFeatures(features_Communitysizebyaltitude_8);
var lyr_Communitysizebyaltitude_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communitysizebyaltitude_8, 
                style: style_Communitysizebyaltitude_8,
                popuplayertitle: 'Community size by altitude',
                interactive: false,
    title: 'Community size by altitude<br />\
    <img src="styles/legend/Communitysizebyaltitude_8_0.png" /> >1000m<br />\
    <img src="styles/legend/Communitysizebyaltitude_8_1.png" /> 200-1000m<br />\
    <img src="styles/legend/Communitysizebyaltitude_8_2.png" /> <200m<br />' });
var format_density_9 = new ol.format.GeoJSON();
var features_density_9 = format_density_9.readFeatures(json_density_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_density_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_density_9.addFeatures(features_density_9);
var lyr_density_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_density_9, 
                style: style_density_9,
                popuplayertitle: 'density',
                interactive: false,
    title: 'density<br />\
    <img src="styles/legend/density_9_0.png" /> <5<br />\
    <img src="styles/legend/density_9_1.png" /> 5 - 10<br />\
    <img src="styles/legend/density_9_2.png" /> 10 - 20<br />\
    <img src="styles/legend/density_9_3.png" /> 20 - 50<br />\
    <img src="styles/legend/density_9_4.png" /> >50<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_relief_rendered_1.setVisible(false);lyr_Altitudezones_2.setVisible(false);lyr_land_use_rendered_3.setVisible(false);lyr_thessaly_ota_pop_distastika_4.setVisible(false);lyr_thessaly_ota_pop_dist02oreina_5.setVisible(false);lyr_gdpagriculture_6.setVisible(false);lyr_thessaly_gdp_ind_distoutput_layer_7.setVisible(false);lyr_Communitysizebyaltitude_8.setVisible(false);lyr_density_9.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_relief_rendered_1,lyr_Altitudezones_2,lyr_land_use_rendered_3,lyr_thessaly_ota_pop_distastika_4,lyr_thessaly_ota_pop_dist02oreina_5,lyr_gdpagriculture_6,lyr_thessaly_gdp_ind_distoutput_layer_7,lyr_Communitysizebyaltitude_8,lyr_density_9];
lyr_thessaly_ota_pop_distastika_4.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_ke': 'kodikos_ke', 'piknotita': 'piknotita', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_thessaly_ota_pop_dist02oreina_5.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_ke': 'kodikos_ke', 'piknotita': 'piknotita', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_gdpagriculture_6.set('fieldAliases', {'fid': 'fid', 'Nomos': 'Nomos', 'Ανθρωπογενές': 'Ανθρωπογενές', 'Δασικές': 'Δασικές', 'Γεωργικές': 'Γεωργικές', 'Υγρότοποι': 'Υγρότοποι', 'Αστικοί': 'Αστικοί', 'Αγροτικοί': 'Αγροτικοί', 'ορεινοί': 'ορεινοί', 'ημιορεινοί': 'ημιορεινοί', 'πεδινοί': 'πεδινοί', 'ΑΕΠ κκ': 'ΑΕΠ κκ', 'Πληθυσμός': 'Πληθυσμός', 'ΑΕΠ': 'ΑΕΠ', 'test': 'test', 'ΑΕΠ γεωργία': 'ΑΕΠ γεωργία', 'ΑΕΠ μεταποίηση': 'ΑΕΠ μεταποίηση', 'ΑΕΠ ανά στρέμμα': 'ΑΕΠ ανά στρέμμα', });
lyr_thessaly_gdp_ind_distoutput_layer_7.set('fieldAliases', {'fid': 'fid', 'Nomos': 'Nomos', 'Ανθρωπογενές': 'Ανθρωπογενές', 'Δασικές': 'Δασικές', 'Γεωργικές': 'Γεωργικές', 'Υγρότοποι': 'Υγρότοποι', 'Αστικοί': 'Αστικοί', 'Αγροτικοί': 'Αγροτικοί', 'ορεινοί': 'ορεινοί', 'ημιορεινοί': 'ημιορεινοί', 'πεδινοί': 'πεδινοί', 'ΑΕΠ κκ': 'ΑΕΠ κκ', 'Πληθυσμός': 'Πληθυσμός', 'ΑΕΠ': 'ΑΕΠ', 'test': 'test', 'Γεωργία': 'Γεωργία', 'Βιομηχανία': 'Βιομηχανία', 'Υπηρεσίες': 'Υπηρεσίες', 'Δημόσιο': 'Δημόσιο', 'Ακίνητα': 'Ακίνητα', 'Σύνολο': 'Σύνολο', });
lyr_Communitysizebyaltitude_8.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_keim': 'kodikos_keim', 'piknotita': 'piknotita', 'area': 'area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_density_9.set('fieldAliases', {'fid': 'fid', 'KAL2022': 'KAL2022', 'LAU_LABEL3': 'LAU_LABEL3', 'Nomos': 'Nomos', 'Field1': 'Field1', 'Field2': 'Field2', 'Field3': 'Field3', 'plithismos': 'plithismos', 'Astikotita': 'Astikotita', 'Oreinotita': 'Oreinotita', 'ektasi': 'ektasi', 'kodikos': 'kodikos', 'kodikos_keim': 'kodikos_keim', 'piknotita': 'piknotita', 'area': 'area', });
lyr_thessaly_ota_pop_distastika_4.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'TextEdit', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'TextEdit', 'kodikos_ke': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_thessaly_ota_pop_dist02oreina_5.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'TextEdit', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'TextEdit', 'Astikotita': 'TextEdit', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'TextEdit', 'kodikos_ke': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_gdpagriculture_6.set('fieldImages', {'fid': 'TextEdit', 'Nomos': 'TextEdit', 'Ανθρωπογενές': 'Range', 'Δασικές': 'Range', 'Γεωργικές': 'Range', 'Υγρότοποι': 'Range', 'Αστικοί': 'TextEdit', 'Αγροτικοί': 'TextEdit', 'ορεινοί': 'Range', 'ημιορεινοί': 'Range', 'πεδινοί': 'Range', 'ΑΕΠ κκ': 'Range', 'Πληθυσμός': 'Range', 'ΑΕΠ': 'TextEdit', 'test': 'Range', 'ΑΕΠ γεωργία': 'Range', 'ΑΕΠ μεταποίηση': 'Range', 'ΑΕΠ ανά στρέμμα': '', });
lyr_thessaly_gdp_ind_distoutput_layer_7.set('fieldImages', {'fid': 'TextEdit', 'Nomos': 'TextEdit', 'Ανθρωπογενές': 'TextEdit', 'Δασικές': 'TextEdit', 'Γεωργικές': 'TextEdit', 'Υγρότοποι': 'TextEdit', 'Αστικοί': 'TextEdit', 'Αγροτικοί': 'TextEdit', 'ορεινοί': 'Range', 'ημιορεινοί': 'Range', 'πεδινοί': 'Range', 'ΑΕΠ κκ': 'Range', 'Πληθυσμός': 'Range', 'ΑΕΠ': 'TextEdit', 'test': 'Range', 'Γεωργία': 'Range', 'Βιομηχανία': 'Range', 'Υπηρεσίες': 'Range', 'Δημόσιο': 'Range', 'Ακίνητα': 'Range', 'Σύνολο': 'Range', });
lyr_Communitysizebyaltitude_8.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'Range', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'Range', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'Range', 'kodikos_keim': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_density_9.set('fieldImages', {'fid': 'TextEdit', 'KAL2022': 'TextEdit', 'LAU_LABEL3': 'TextEdit', 'Nomos': 'TextEdit', 'Field1': 'Range', 'Field2': 'TextEdit', 'Field3': 'TextEdit', 'plithismos': 'Range', 'Astikotita': 'Range', 'Oreinotita': 'TextEdit', 'ektasi': 'TextEdit', 'kodikos': 'Range', 'kodikos_keim': 'TextEdit', 'piknotita': 'TextEdit', 'area': 'Range', });
lyr_thessaly_ota_pop_distastika_4.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_ke': 'no label', 'piknotita': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_thessaly_ota_pop_dist02oreina_5.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_ke': 'no label', 'piknotita': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_gdpagriculture_6.set('fieldLabels', {'fid': 'no label', 'Nomos': 'no label', 'Ανθρωπογενές': 'no label', 'Δασικές': 'no label', 'Γεωργικές': 'no label', 'Υγρότοποι': 'no label', 'Αστικοί': 'no label', 'Αγροτικοί': 'no label', 'ορεινοί': 'no label', 'ημιορεινοί': 'no label', 'πεδινοί': 'no label', 'ΑΕΠ κκ': 'no label', 'Πληθυσμός': 'no label', 'ΑΕΠ': 'no label', 'test': 'no label', 'ΑΕΠ γεωργία': 'no label', 'ΑΕΠ μεταποίηση': 'no label', 'ΑΕΠ ανά στρέμμα': 'no label', });
lyr_thessaly_gdp_ind_distoutput_layer_7.set('fieldLabels', {'fid': 'no label', 'Nomos': 'no label', 'Ανθρωπογενές': 'no label', 'Δασικές': 'no label', 'Γεωργικές': 'no label', 'Υγρότοποι': 'no label', 'Αστικοί': 'no label', 'Αγροτικοί': 'no label', 'ορεινοί': 'no label', 'ημιορεινοί': 'no label', 'πεδινοί': 'no label', 'ΑΕΠ κκ': 'no label', 'Πληθυσμός': 'no label', 'ΑΕΠ': 'no label', 'test': 'no label', 'Γεωργία': 'no label', 'Βιομηχανία': 'no label', 'Υπηρεσίες': 'no label', 'Δημόσιο': 'no label', 'Ακίνητα': 'no label', 'Σύνολο': 'no label', });
lyr_Communitysizebyaltitude_8.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_keim': 'no label', 'piknotita': 'no label', 'area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_density_9.set('fieldLabels', {'fid': 'no label', 'KAL2022': 'no label', 'LAU_LABEL3': 'no label', 'Nomos': 'no label', 'Field1': 'no label', 'Field2': 'no label', 'Field3': 'no label', 'plithismos': 'no label', 'Astikotita': 'no label', 'Oreinotita': 'no label', 'ektasi': 'no label', 'kodikos': 'no label', 'kodikos_keim': 'no label', 'piknotita': 'no label', 'area': 'no label', });
lyr_density_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
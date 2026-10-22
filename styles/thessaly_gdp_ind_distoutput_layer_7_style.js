var size = 0;
var placement = 'point';
function categories_thessaly_gdp_ind_distoutput_layer_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Καρδίτσας':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,200,55,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Λάρισας':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(101,53,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Μαγνησίας':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,16,114,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Τρικάλων':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,174,43,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_thessaly_gdp_ind_distoutput_layer_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Nomos");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_thessaly_gdp_ind_distoutput_layer_7_eval_expression(context) !== null) {
        labelText = String(exp_label_thessaly_gdp_ind_distoutput_layer_7_eval_expression(context));
    }
    
    var style = categories_thessaly_gdp_ind_distoutput_layer_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.forEachIndex2 = 0;

gdjs.Untitled_32sceneCode.forEachObjects2 = [];

gdjs.Untitled_32sceneCode.forEachTemporary2 = null;

gdjs.Untitled_32sceneCode.forEachTotalCount2 = 0;

gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1= [];
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2= [];
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3= [];
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4= [];
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects5= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects5= [];
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects1= [];
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects2= [];
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects3= [];
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects4= [];
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects5= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("Animation").setAnimationName("Walking Up");
}
}}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("Animation").setAnimationName("Walking Down");
}
}}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("OnlinePlayer").IsMe((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("TopDownMovement").ignoreDefaultControls(false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("OnlinePlayer").ConnectionStatus("Connected", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("OnlinePlayer").ConnectionStatus("Disconnected just now", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2, gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i].getBehavior("OnlinePlayer").ConnectionStatus("Connected just now", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length = k;
if (isConditionTrue_0) {
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Resizable").setSize(168, 184);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("OnlinePlayer").IsMe((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[k] = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Resizable").setSize(168, 184);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Animation").setAnimationName("Walking Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Animation").setAnimationName("Walking Down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FemaleCharacter2"), gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1);

for (gdjs.Untitled_32sceneCode.forEachIndex2 = 0;gdjs.Untitled_32sceneCode.forEachIndex2 < gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length;++gdjs.Untitled_32sceneCode.forEachIndex2) {
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2.length = 0;


gdjs.Untitled_32sceneCode.forEachTemporary2 = gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1[gdjs.Untitled_32sceneCode.forEachIndex2];
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2.push(gdjs.Untitled_32sceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDFemaleCharacter2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDTilesetPiece7Objects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

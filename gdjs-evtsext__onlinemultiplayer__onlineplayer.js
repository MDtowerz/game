
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer || {};

/**
 * Behavior generated from Online Player
 */
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer = class OnlinePlayer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.FirstFrame = true;
    this._behaviorData.Position = behaviorData.Position !== undefined ? behaviorData.Position : true;
    this._behaviorData.Angle = behaviorData.Angle !== undefined ? behaviorData.Angle : true;
    this._behaviorData.ZOrder = behaviorData.ZOrder !== undefined ? behaviorData.ZOrder : false;
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : false;
    this._behaviorData.Frame = behaviorData.Frame !== undefined ? behaviorData.Frame : false;
    this._behaviorData.Flip = behaviorData.Flip !== undefined ? behaviorData.Flip : false;
    this._behaviorData.PositionInterpolation = behaviorData.PositionInterpolation !== undefined ? behaviorData.PositionInterpolation : false;
    this._behaviorData.Id = "";
    this._behaviorData.Active = true;
    this._behaviorData.SharedString = "";
    this._behaviorData.SharedStringClear = false;
    this._behaviorData.ConnectedFrameCounter = Number("0") || 0;
    this._behaviorData.DisconnectedFrameCounter = Number("0") || 0;
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.FirstFrame !== newBehaviorData.FirstFrame)
      this._behaviorData.FirstFrame = newBehaviorData.FirstFrame;
    if (oldBehaviorData.Position !== newBehaviorData.Position)
      this._behaviorData.Position = newBehaviorData.Position;
    if (oldBehaviorData.Angle !== newBehaviorData.Angle)
      this._behaviorData.Angle = newBehaviorData.Angle;
    if (oldBehaviorData.ZOrder !== newBehaviorData.ZOrder)
      this._behaviorData.ZOrder = newBehaviorData.ZOrder;
    if (oldBehaviorData.Animation !== newBehaviorData.Animation)
      this._behaviorData.Animation = newBehaviorData.Animation;
    if (oldBehaviorData.Frame !== newBehaviorData.Frame)
      this._behaviorData.Frame = newBehaviorData.Frame;
    if (oldBehaviorData.Flip !== newBehaviorData.Flip)
      this._behaviorData.Flip = newBehaviorData.Flip;
    if (oldBehaviorData.PositionInterpolation !== newBehaviorData.PositionInterpolation)
      this._behaviorData.PositionInterpolation = newBehaviorData.PositionInterpolation;
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.Active !== newBehaviorData.Active)
      this._behaviorData.Active = newBehaviorData.Active;
    if (oldBehaviorData.SharedString !== newBehaviorData.SharedString)
      this._behaviorData.SharedString = newBehaviorData.SharedString;
    if (oldBehaviorData.SharedStringClear !== newBehaviorData.SharedStringClear)
      this._behaviorData.SharedStringClear = newBehaviorData.SharedStringClear;
    if (oldBehaviorData.ConnectedFrameCounter !== newBehaviorData.ConnectedFrameCounter)
      this._behaviorData.ConnectedFrameCounter = newBehaviorData.ConnectedFrameCounter;
    if (oldBehaviorData.DisconnectedFrameCounter !== newBehaviorData.DisconnectedFrameCounter)
      this._behaviorData.DisconnectedFrameCounter = newBehaviorData.DisconnectedFrameCounter;
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;

    return true;
  }

  // Properties:
  
  _getFirstFrame() {
    return this._behaviorData.FirstFrame !== undefined ? this._behaviorData.FirstFrame : true;
  }
  _setFirstFrame(newValue) {
    this._behaviorData.FirstFrame = newValue;
  }
  _toggleFirstFrame() {
    this._setFirstFrame(!this._getFirstFrame());
  }
  _getPosition() {
    return this._behaviorData.Position !== undefined ? this._behaviorData.Position : true;
  }
  _setPosition(newValue) {
    this._behaviorData.Position = newValue;
  }
  _togglePosition() {
    this._setPosition(!this._getPosition());
  }
  _getAngle() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : true;
  }
  _setAngle(newValue) {
    this._behaviorData.Angle = newValue;
  }
  _toggleAngle() {
    this._setAngle(!this._getAngle());
  }
  _getZOrder() {
    return this._behaviorData.ZOrder !== undefined ? this._behaviorData.ZOrder : false;
  }
  _setZOrder(newValue) {
    this._behaviorData.ZOrder = newValue;
  }
  _toggleZOrder() {
    this._setZOrder(!this._getZOrder());
  }
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : false;
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _toggleAnimation() {
    this._setAnimation(!this._getAnimation());
  }
  _getFrame() {
    return this._behaviorData.Frame !== undefined ? this._behaviorData.Frame : false;
  }
  _setFrame(newValue) {
    this._behaviorData.Frame = newValue;
  }
  _toggleFrame() {
    this._setFrame(!this._getFrame());
  }
  _getFlip() {
    return this._behaviorData.Flip !== undefined ? this._behaviorData.Flip : false;
  }
  _setFlip(newValue) {
    this._behaviorData.Flip = newValue;
  }
  _toggleFlip() {
    this._setFlip(!this._getFlip());
  }
  _getPositionInterpolation() {
    return this._behaviorData.PositionInterpolation !== undefined ? this._behaviorData.PositionInterpolation : false;
  }
  _setPositionInterpolation(newValue) {
    this._behaviorData.PositionInterpolation = newValue;
  }
  _togglePositionInterpolation() {
    this._setPositionInterpolation(!this._getPositionInterpolation());
  }
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : "";
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getActive() {
    return this._behaviorData.Active !== undefined ? this._behaviorData.Active : true;
  }
  _setActive(newValue) {
    this._behaviorData.Active = newValue;
  }
  _toggleActive() {
    this._setActive(!this._getActive());
  }
  _getSharedString() {
    return this._behaviorData.SharedString !== undefined ? this._behaviorData.SharedString : "";
  }
  _setSharedString(newValue) {
    this._behaviorData.SharedString = newValue;
  }
  _getSharedStringClear() {
    return this._behaviorData.SharedStringClear !== undefined ? this._behaviorData.SharedStringClear : false;
  }
  _setSharedStringClear(newValue) {
    this._behaviorData.SharedStringClear = newValue;
  }
  _toggleSharedStringClear() {
    this._setSharedStringClear(!this._getSharedStringClear());
  }
  _getConnectedFrameCounter() {
    return this._behaviorData.ConnectedFrameCounter !== undefined ? this._behaviorData.ConnectedFrameCounter : Number("0") || 0;
  }
  _setConnectedFrameCounter(newValue) {
    this._behaviorData.ConnectedFrameCounter = newValue;
  }
  _getDisconnectedFrameCounter() {
    return this._behaviorData.DisconnectedFrameCounter !== undefined ? this._behaviorData.DisconnectedFrameCounter : Number("0") || 0;
  }
  _setDisconnectedFrameCounter(newValue) {
    this._behaviorData.DisconnectedFrameCounter = newValue;
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
}

/**
 * Shared data generated from Online Player
 */
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.SharedData = class OnlinePlayerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData = new gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.SharedData(
      initialData
    );
  }
  return instanceContainer._OnlineMultiplayer_OnlinePlayerSharedData;
}

// Methods:
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.userFunc0xaa5490 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function _0xb510(){const _0x12a1b6=['common','_getPositionInterpolation','setAngle','readyState','addEventListener','Type','getAnimationFrame','length','evtTools','keys','_getSharedStringClear','warn','Log','217cjBvzR','_getFirstFrame','getAnimation','SetFlip','_OnlineMultiplayer','createObject','_getFrame','addObjectPositionTween','getName','The\x20extension\x20was\x20rejected\x20by\x20the\x20server\x20because\x20it\x20is\x20an\x20old\x20version!','addObjectAngleTween','ZOrder','Error','999030igDpkm','Frame','flipY','isFlippedY','parse','flipX','getTimerElapsedTimeInSeconds','open','_OnlineMultiplayerAngleTween','_setDisconnectedFrameCounter','close','2141355HsRWQy','set','_setConnectedFrameCounter','_getAngle','setZOrder','has','setY','_getFlip','_getDisconnectedFrameCounter','Animation','11870Snkbpy','removeTween','name','OnlinePlayer','Do\x20not\x20create\x20more\x20than\x20one!','_OnlineMultiplayerTimer','Update','Angle','LastReceivedTime','_setActive','isFlippedX','now','get','send','ObjectName','setAnimation','exists','_OnlineMultiplayerPositionTween','wss://ws.pandako.mydns.jp/','SetSharedString','deleteFromScene','Random','Tween','_setId','roundTo','delete','\x20characters!','message','88856OwDsSC','225468MdzzPJ','_setFirstFrame','getGameData','_getAnimation','getAngle','getInstancesCountOnScene','getBehavior','Flip','_getConnectedFrameCounter','setAnimationFrame','74IsrxNq','SharedString','Message','Connected','10oMNvuS','82422oapTSz','\x22,\x20\x22ObjectName\x22:\x20\x22','Players','4uvgRrF','GetFlipNum','_getZOrder','3299076DvjTek','Received\x20unexpected\x20data!'];_0xb510=function(){return _0x12a1b6;};return _0xb510();}function _0x5bc8(_0x21c621,_0x26e7c5){const _0xb510a9=_0xb510();return _0x5bc8=function(_0x5bc854,_0x45b4a1){_0x5bc854=_0x5bc854-0x1a1;let _0x4ff8c5=_0xb510a9[_0x5bc854];return _0x4ff8c5;},_0x5bc8(_0x21c621,_0x26e7c5);}(function(_0x1af167,_0x568da6){const _0x42a1a3=_0x5bc8,_0x1f5c7e=_0x1af167();while(!![]){try{const _0x499184=parseInt(_0x42a1a3(0x1b9))/0x1*(parseInt(_0x42a1a3(0x1f5))/0x2)+-parseInt(_0x42a1a3(0x1e0))/0x3*(parseInt(_0x42a1a3(0x1c1))/0x4)+-parseInt(_0x42a1a3(0x1eb))/0x5+parseInt(_0x42a1a3(0x1be))/0x6+parseInt(_0x42a1a3(0x1d3))/0x7*(parseInt(_0x42a1a3(0x1ae))/0x8)+parseInt(_0x42a1a3(0x1af))/0x9*(-parseInt(_0x42a1a3(0x1bd))/0xa)+parseInt(_0x42a1a3(0x1c4))/0xb;if(_0x499184===_0x568da6)break;else _0x1f5c7e['push'](_0x1f5c7e['shift']());}catch(_0x41234f){_0x1f5c7e['push'](_0x1f5c7e['shift']());}}}(_0xb510,0x4be2b),((()=>{const _0x2d01b7=_0x5bc8,_0x2d24b6=objects[0x0],_0x21f7ad=_0x2d24b6[_0x2d01b7(0x1b5)]('OnlinePlayer');if(_0x21f7ad['_getActive']()){if(_0x21f7ad[_0x2d01b7(0x1d4)]()){_0x21f7ad[_0x2d01b7(0x1b0)](![]);if(runtimeScene[_0x2d01b7(0x1b4)](_0x2d24b6[_0x2d01b7(0x1f7)])>0x1){_0x2d24b6[_0x2d01b7(0x1a6)](runtimeScene),console[_0x2d01b7(0x1d1)]('Do\x20not\x20create\x20more\x20than\x20one!');return;}if(gdjs[_0x2d01b7(0x1d7)]){_0x2d24b6[_0x2d01b7(0x1a6)](runtimeScene),console['warn'](_0x2d01b7(0x1f9));return;}gdjs['_OnlineMultiplayer']=new Map(),gdjs[_0x2d01b7(0x1d7)]['set']('WS',new WebSocket(_0x2d01b7(0x1a4))),gdjs[_0x2d01b7(0x1d7)]['set'](_0x2d01b7(0x1d2),[]),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)]('Id',''),gdjs['_OnlineMultiplayer'][_0x2d01b7(0x1ec)](_0x2d01b7(0x1bb),{}),gdjs['_OnlineMultiplayer'][_0x2d01b7(0x1ec)]('Random',-0x1),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)]('T',12.3/0x7b),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)]('L',0x300c/0x7b),gdjs[_0x2d01b7(0x1d7)]['set'](_0x2d01b7(0x1fd),Date[_0x2d01b7(0x200)]()),gdjs[_0x2d01b7(0x1d7)]['set'](_0x2d01b7(0x1c0),new Map()),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)](_0x2d01b7(0x1c2),(_0x599f4f,_0x47a602)=>{let _0x51c384=0x0;return _0x51c384+=_0x599f4f?0x1:0x0,_0x51c384+=_0x47a602?0x2:0x0,_0x51c384;}),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)](_0x2d01b7(0x1d6),(_0x50869d,_0x2915b8)=>{const _0x58a87a=_0x2d01b7;_0x50869d[_0x58a87a(0x1e5)](![]),_0x50869d['flipY'](![]),(_0x2915b8==0x1||_0x2915b8==0x3)&&_0x50869d[_0x58a87a(0x1e5)](!![]),(_0x2915b8==0x2||_0x2915b8==0x3)&&_0x50869d[_0x58a87a(0x1e2)](!![]);}),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)](_0x2d01b7(0x1df),![]);const _0x444507=gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x201)]('WS');_0x444507['addEventListener'](_0x2d01b7(0x1e7),_0x5d6a4f=>{const _0x443a45=_0x2d01b7;_0x444507[_0x443a45(0x202)]('{\x22Type\x22:\x22Connect\x22,\x20\x22Game\x22:\x22'+runtimeScene['getGame']()[_0x443a45(0x1b1)]()['properties'][_0x443a45(0x1f7)]+'\x22,\x20\x22Scene\x22:\x20\x22'+runtimeScene[_0x443a45(0x1db)]()+_0x443a45(0x1bf)+_0x2d24b6[_0x443a45(0x1f7)]+'\x22,\x20\x22Ver\x22:9}');}),_0x444507[_0x2d01b7(0x1ca)](_0x2d01b7(0x1ad),_0x320d97=>{const _0x4544c2=_0x2d01b7,_0x3b0a95=JSON[_0x4544c2(0x1e4)](_0x320d97['data']),_0x52822e=gdjs[_0x4544c2(0x1d7)][_0x4544c2(0x201)](_0x4544c2(0x1d2));if(_0x3b0a95[_0x4544c2(0x1cb)]==_0x4544c2(0x1bc))gdjs[_0x4544c2(0x1d7)][_0x4544c2(0x1ec)]('Id',_0x3b0a95['Id']),_0x21f7ad['_setId'](_0x3b0a95['Id']);else _0x3b0a95[_0x4544c2(0x1cb)]=='Rejected'?(console[_0x4544c2(0x1d1)](_0x4544c2(0x1dc)),_0x444507[_0x4544c2(0x1ea)](),gdjs[_0x4544c2(0x1d7)][_0x4544c2(0x1ec)](_0x4544c2(0x1df),!![])):_0x52822e['push'](_0x3b0a95);gdjs[_0x4544c2(0x1d7)][_0x4544c2(0x1ec)](_0x4544c2(0x1fd),Date['now']());}),_0x444507[_0x2d01b7(0x1ca)]('error',_0x146e69=>{const _0x4a87bb=_0x2d01b7;gdjs[_0x4a87bb(0x1d7)][_0x4a87bb(0x1ec)](_0x4a87bb(0x1df),!![]);}),_0x444507['addEventListener'](_0x2d01b7(0x1ea),_0x1ade89=>{}),_0x2d24b6['resetTimer'](_0x2d01b7(0x1fa));}if(!gdjs[_0x2d01b7(0x1d7)]){_0x21f7ad['_setDisconnectedFrameCounter'](_0x21f7ad[_0x2d01b7(0x1f3)]()+0x1);return;}const _0x93db7a=gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x201)]('WS');if(_0x93db7a[_0x2d01b7(0x1c9)]==0x0)return;else{if(_0x93db7a[_0x2d01b7(0x1c9)]>=0x2){_0x21f7ad['_setDisconnectedFrameCounter'](_0x21f7ad[_0x2d01b7(0x1f3)]()+0x1);_0x21f7ad[_0x2d01b7(0x1f3)]()>0x1&&(gdjs[_0x2d01b7(0x1d7)]=undefined);return;}else{if(_0x21f7ad['_getId']()==='')return;}}_0x21f7ad[_0x2d01b7(0x1ed)](_0x21f7ad[_0x2d01b7(0x1b7)]()+0x1);if(gdjs[_0x2d01b7(0x1d7)]['get'](_0x2d01b7(0x1fd))+0x1388<Date['now']()){_0x93db7a[_0x2d01b7(0x1ea)]();return;}let _0x1257e4=gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x201)]('Log');const _0xd88b08=gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x201)]('Players'),_0x3b044e=new Map();for(const _0x171da3 of _0x1257e4){if(_0x171da3[_0x2d01b7(0x1cb)]==_0x2d01b7(0x1fb)){gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)]('Random',_0x171da3[_0x2d01b7(0x1a7)]);for(const _0xebe200 of _0x171da3['Data']){_0x3b044e[_0x2d01b7(0x1ec)](_0xebe200['Id'],'');if(gdjs[_0x2d01b7(0x1d7)]['get']('Id')!==_0xebe200['Id']){let _0x336aad;_0xd88b08[_0x2d01b7(0x1f0)](_0xebe200['Id'])?_0x336aad=_0xd88b08[_0x2d01b7(0x201)](_0xebe200['Id']):(_0x336aad=runtimeScene[_0x2d01b7(0x1d8)](_0xebe200[_0x2d01b7(0x203)]),_0x336aad[_0x2d01b7(0x1b5)](_0x2d01b7(0x1f8))[_0x2d01b7(0x1fe)](![]),_0x336aad['getBehavior'](_0x2d01b7(0x1f8))[_0x2d01b7(0x1a9)](_0xebe200['Id']),_0x336aad[_0x2d01b7(0x1ef)](runtimeScene['getLayer']('')['getDefaultZOrder']()),_0xd88b08[_0x2d01b7(0x1ec)](_0xebe200['Id'],_0x336aad));if(_0xebe200['X']!==undefined){if(_0x336aad['getBehavior'](_0x2d01b7(0x1f8))[_0x2d01b7(0x1c7)]()){const _0x39f756=_0x336aad[_0x2d01b7(0x1b5)]('Tween');_0x39f756[_0x2d01b7(0x1a2)](_0x2d01b7(0x1a3))&&_0x39f756[_0x2d01b7(0x1f6)](_0x2d01b7(0x1a3)),_0x39f756[_0x2d01b7(0x1da)](_0x2d01b7(0x1a3),_0xebe200['X'],_0xebe200['Y'],'linear',gdjs['_OnlineMultiplayer'][_0x2d01b7(0x201)]('T')*0x3e8,![]);}else _0x336aad['setX'](_0xebe200['X']),_0x336aad[_0x2d01b7(0x1f1)](_0xebe200['Y']);}if(_0xebe200['Angle']!==undefined){if(_0x336aad[_0x2d01b7(0x1b5)]('OnlinePlayer')[_0x2d01b7(0x1c7)]()){const _0x1c4e91=_0x336aad[_0x2d01b7(0x1b5)](_0x2d01b7(0x1a8));_0x1c4e91[_0x2d01b7(0x1a2)](_0x2d01b7(0x1e8))&&_0x1c4e91[_0x2d01b7(0x1f6)](_0x2d01b7(0x1e8)),_0x1c4e91[_0x2d01b7(0x1dd)]('_OnlineMultiplayerAngleTween',_0xebe200['Angle'],'linear',gdjs['_OnlineMultiplayer'][_0x2d01b7(0x201)]('T')*0x3e8,![]);}else _0x336aad[_0x2d01b7(0x1c8)](_0xebe200[_0x2d01b7(0x1fc)]);}_0xebe200[_0x2d01b7(0x1de)]!==undefined&&_0x336aad[_0x2d01b7(0x1ef)](_0xebe200[_0x2d01b7(0x1de)]),_0xebe200[_0x2d01b7(0x1f4)]!==undefined&&_0x336aad[_0x2d01b7(0x1a1)](_0xebe200[_0x2d01b7(0x1f4)]),_0xebe200[_0x2d01b7(0x1e1)]!==undefined&&_0x336aad[_0x2d01b7(0x1b8)](_0xebe200[_0x2d01b7(0x1e1)]),_0xebe200['Flip']!==undefined&&gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x201)](_0x2d01b7(0x1d6))(_0x336aad,_0xebe200['Flip']),_0xebe200[_0x2d01b7(0x1ba)]!==undefined&&_0x336aad[_0x2d01b7(0x1b5)](_0x2d01b7(0x1f8))[_0x2d01b7(0x1a5)](_0xebe200['SharedString']);}}}else console[_0x2d01b7(0x1d1)](_0x2d01b7(0x1c5));}if(_0x1257e4['length']>0x0)for(let [_0x28f803,_0x163986]of _0xd88b08){!_0x3b044e[_0x2d01b7(0x1f0)](_0x28f803)&&_0xd88b08[_0x2d01b7(0x1ab)](_0x28f803);}gdjs['_OnlineMultiplayer'][_0x2d01b7(0x1ec)](_0x2d01b7(0x1d2),[]);if(gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x201)]('Id')=='')return;if(_0x2d24b6[_0x2d01b7(0x1e6)](_0x2d01b7(0x1fa))<gdjs[_0x2d01b7(0x1d7)]['get']('T'))return;_0x2d24b6['resetTimer'](_0x2d01b7(0x1fa));const _0x486013=gdjs[_0x2d01b7(0x1d7)]['get'](_0x2d01b7(0x1bb));_0x21f7ad['_getPosition']()&&(_0x486013['X']=gdjs[_0x2d01b7(0x1ce)][_0x2d01b7(0x1c6)][_0x2d01b7(0x1aa)](_0x2d24b6['getX'](),0x2),_0x486013['Y']=gdjs[_0x2d01b7(0x1ce)]['common']['roundTo'](_0x2d24b6['getY'](),0x2));_0x21f7ad[_0x2d01b7(0x1ee)]()&&(_0x486013[_0x2d01b7(0x1fc)]=gdjs[_0x2d01b7(0x1ce)][_0x2d01b7(0x1c6)][_0x2d01b7(0x1aa)](_0x2d24b6[_0x2d01b7(0x1b3)](),0x2));_0x21f7ad[_0x2d01b7(0x1c3)]()&&(_0x486013[_0x2d01b7(0x1de)]=_0x2d24b6['getZOrder']());_0x21f7ad[_0x2d01b7(0x1b2)]()&&(_0x486013['Animation']=_0x2d24b6[_0x2d01b7(0x1d5)]());_0x21f7ad[_0x2d01b7(0x1d9)]()&&(_0x486013['Frame']=_0x2d24b6[_0x2d01b7(0x1cc)]());_0x21f7ad[_0x2d01b7(0x1f2)]()&&(_0x486013[_0x2d01b7(0x1b6)]=gdjs[_0x2d01b7(0x1d7)]['get'](_0x2d01b7(0x1c2))(_0x2d24b6[_0x2d01b7(0x1ff)](),_0x2d24b6[_0x2d01b7(0x1e3)]()));if(Object[_0x2d01b7(0x1cf)](_0x486013)[_0x2d01b7(0x1cd)]==0x0)return;_0x486013[_0x2d01b7(0x1cb)]=_0x2d01b7(0x1fb),_0x21f7ad['SharedString']()[_0x2d01b7(0x1cd)]>gdjs[_0x2d01b7(0x1d7)]['get']('L')&&(_0x21f7ad['SetSharedString'](''),console['warn']('Shared\x20string\x20exceeds\x20'+gdjs[_0x2d01b7(0x1d7)]['get']('L')+_0x2d01b7(0x1ac))),_0x486013[_0x2d01b7(0x1ba)]=_0x21f7ad['SharedString'](),_0x93db7a['send'](JSON['stringify'](_0x486013)),gdjs[_0x2d01b7(0x1d7)][_0x2d01b7(0x1ec)](_0x2d01b7(0x1bb),{}),_0x21f7ad[_0x2d01b7(0x1d0)]()&&_0x21f7ad[_0x2d01b7(0x1a5)]('');}else{_0x21f7ad[_0x2d01b7(0x1d4)]()&&_0x21f7ad[_0x2d01b7(0x1b0)](![]);if(gdjs[_0x2d01b7(0x1d7)]){const _0x4fc8ba=gdjs['_OnlineMultiplayer'][_0x2d01b7(0x201)](_0x2d01b7(0x1c0)),_0x16b334=_0x4fc8ba['has'](_0x21f7ad['_getId']());_0x16b334?_0x21f7ad[_0x2d01b7(0x1ed)](_0x21f7ad[_0x2d01b7(0x1b7)]()+0x1):_0x21f7ad['_setDisconnectedFrameCounter'](_0x21f7ad[_0x2d01b7(0x1f3)]()+0x1);}else _0x21f7ad[_0x2d01b7(0x1e9)](_0x21f7ad[_0x2d01b7(0x1f3)]()+0x1);}})()));
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.userFunc0xaa5490(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.userFunc0x915680 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        WS.close();
        gdjs._OnlineMultiplayer = undefined;
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.userFunc0x915680(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("String") : ""));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Clear") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedStringClear(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Clear") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSharedStringClear(false);
}
}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedString = function(String, Clear, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "String") return String;
if (argName === "Clear") return Clear;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SetSharedStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Interpolate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPositionInterpolation(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Interpolate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPositionInterpolation(true);
}
}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolation = function(Interpolate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Interpolate") return Interpolate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ChangePositionInterpolationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.userFunc0x915680 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        WS.close();
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.userFunc0x915680(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.Disconnect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.DisconnectContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.userFunc0x92c070 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
const Status = eventsFunctionContext.getArgument("Status");
eventsFunctionContext.returnValue = false;
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        const WS = gdjs._OnlineMultiplayer.get("WS");
        if (Status == "Before connection" && WS.readyState === 0) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected just now" && WS.readyState === 1 && Behavior._getConnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected" && WS.readyState === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected just now" && WS.readyState >= 2 && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected" && WS.readyState >= 2) {
            eventsFunctionContext.returnValue = true;
        }
    } else {
        if (Status == "Before connection") {
            eventsFunctionContext.returnValue = true;
        }
    }
} else {
    if (gdjs._OnlineMultiplayer) {
        const Players = gdjs._OnlineMultiplayer.get("Players");
        const Has = Players.has(Behavior._getId());
        if (Status == "Connected just now" && Has && Behavior._getFirstFrame()) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Connected" && Has) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected just now" && !Has && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected" && !Has) {
            eventsFunctionContext.returnValue = true;
        }
    } else {
        if (Status == "Disconnected just now" && Behavior._getDisconnectedFrameCounter() === 1) {
            eventsFunctionContext.returnValue = true;
        }
        if (Status == "Disconnected") {
            eventsFunctionContext.returnValue = true;
        }
    }
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.userFunc0x92c070(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatus = function(Status, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Status") return Status;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ConnectionStatusContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActive()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActive() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[k] = gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMe = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.IsMeContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.userFunc0xaa5700 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Obj = objects[0];
const Behavior = Obj.getBehavior("OnlinePlayer");
eventsFunctionContext.returnValue = false;
if (Behavior._getActive()) {
    if (gdjs._OnlineMultiplayer) {
        eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Error");
    }
}


};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1);
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.userFunc0xaa5700(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurred = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.ErrorOccurredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineID = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.OnlineIDContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSharedString()); }}}

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedString = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext = {};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1= [];


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.userFunc0xaa5700 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._OnlineMultiplayer) {
    eventsFunctionContext.returnValue = gdjs._OnlineMultiplayer.get("Random");
} else {
    eventsFunctionContext.returnValue = -1;
}
};
gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.userFunc0xaa5700(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfScene = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.SharedRandomOfSceneContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("OnlineMultiplayer::OnlinePlayer", gdjs.evtsExt__OnlineMultiplayer__OnlinePlayer.OnlinePlayer);

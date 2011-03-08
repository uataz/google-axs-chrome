// Copyright 2010 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Bridge that sends earcon messages from content scripts or
 * other pages to the main background page.
 *
 * @author clchen@google.com (Charles L. Chen)
 */

goog.provide('cvox.RemoteEarconsManager');

goog.require('cvox.AbstractEarconsManager');
goog.require('cvox.ExtensionBridge');

if (BUILD_TYPE == BUILD_TYPE_CHROME) {
  /**
   * @constructor
   * @extends {cvox.AbstractEarconsManager}
   */
  cvox.RemoteEarconsManager = function() {
    cvox.AbstractEarconsManager.call(this);
  };
  goog.inherits(cvox.RemoteEarconsManager, cvox.AbstractEarconsManager);

  /**
   * @return {string} The human-readable name of this instance.
   */
  cvox.RemoteEarconsManager.prototype.getName = function() {
    return 'RemoteEarconsManager';
  };

  /**
   * Plays the specified earcon.
   * @param {number} earcon The earcon to be played.
   */
  cvox.RemoteEarconsManager.prototype.playEarcon = function(earcon) {
    cvox.RemoteEarconsManager.superClass_.playEarcon.call(this, earcon);
    cvox.ExtensionBridge.send({
        'target': 'EARCON',
        'action': 'play',
        'earcon': earcon});
  };

  /**
   * Switch to the next earcon set and optionally announce its name.
   * If no earcon sets have been specified this function is a NOOP.
   * @param {boolean} announce If true, will announce the name of the
   *     new earcon set.
   */
  cvox.RemoteEarconsManager.prototype.nextEarcons = function(announce) {
    cvox.RemoteEarconsManager.superClass_.nextEarcons.call(this, announce);
    cvox.ExtensionBridge.send({
        'target': 'EARCON',
        'action': 'nextEarcons'});
  };

} else {
  cvox.RemoteEarconsManager = function() {};
}

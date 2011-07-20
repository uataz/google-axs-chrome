//Copyright 2010 Google Inc.
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
 * @fileoverview The ChromeVox build configuration.
 *
 * This is the build configuration file for building for Android
 * (DEVELOPMENT ONLY).
 *
 * @author svetoslavganov@google.com (Svetoslav Ganov)
 */

cvoxgoog.provide('cvox.BuildConfig');

cvoxgoog.require('cvox.BuildDefs');

/**
 * We want to build for Android (DEVELOPMENT ONLY).
 * @type {number}
 */
var BUILD_TYPE = BUILD_TYPE_ANDROID_DEV;

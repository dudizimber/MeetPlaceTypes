'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ApiError = void 0;
var ApiError;
(function (ApiError) {
  ApiError['NOT_IMPLEMENTED'] = 'NOT_IMPLEMENTED';
  ApiError['EMAIL_IN_USE'] = 'EMAIL_IN_USE';
  ApiError['MISSING_PARAMETERS'] = 'MISSING_PARAMETERS';
  ApiError['MISSING_USER_INFO'] = 'MISSING_USER_INFO';
  ApiError['MISSING_EMAIL'] = 'MISSING_EMAIL';
  ApiError['MISSING_FACE_IMAGE'] = 'MISSING_FACE_IMAGE';
  ApiError['ERROR_CREATING_ACCOUNT'] = 'ERROR_CREATING_ACCOUNT';
  ApiError['FACES_NOT_FOUND'] = 'FACES_NOT_FOUND';
  ApiError['TOO_MANY_FACES'] = 'TOO_MANY_FACES';
  ApiError['ERROR_DETECTING_FACES'] = 'ERROR_DETECTING_FACES';
  ApiError['ERROR_UPLOADING_IMAGE'] = 'ERROR_UPLOADING_IMAGE';
  ApiError['ERROR_INDEXING_FACE'] = 'ERROR_INDEXING_FACE';
  ApiError['USER_NOT_FOUND'] = 'USER_NOT_FOUND';
  ApiError['FACEID_NOT_FOUND'] = 'FACEID_NOT_FOUND';
  ApiError['ORD_ID_EXISTENT'] = 'ORD_ID_EXISTENT';
  ApiError['FAILED_GETTING_ORG_MAP'] = 'FAILED_GETTING_ORG_MAP';
  ApiError['FAILED_CREATING_TENANT'] = 'FAILED_CREATING_TENANT';
  ApiError['FAILED_SAVING_ORG'] = 'FAILED_SAVING_ORG';
  ApiError['ERROR_CREATING_COLLECTION'] = 'ERROR_CREATING_COLLECTION';
})((ApiError = exports.ApiError || (exports.ApiError = {})));

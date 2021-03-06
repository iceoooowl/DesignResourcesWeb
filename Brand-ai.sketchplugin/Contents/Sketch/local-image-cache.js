/* global NSURL NSFileManager NSData NSUserDefaults debug getTempFilePath dataURLFromData */

function getMimeType(extension) {
  switch(extension) {
    case 'svg':
      return 'image/svg+xml';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'eps':
    case 'ai':
      return 'application/postscript';
    default:
      return 'application/x-skla';
  }
}

/*
 Currently the path is taken only based on the file name. We assume the file name is unique because we upload an new copy each time with different random key
 */
function getImagePath(image) {

  if (!image.url) {
    return null;
  }
  var path = image.url;

  //find the part that is the name of the file within the url, without the directories on the way
  var lastSperator = path.lastIndexOf('/');
  path = path.substring(lastSperator + 1);

  //remove possible query params, like the cdnSignarure and expiration
  path = path.split('?')[0];

  if (!path) {
    return null;
  }

  const filePath = getImageCachePath() + '/' + path;
  return filePath;
}

function getImageCachePath() {
  return getTempFilePath('brand-ai-image-cache', null, true);
}

function createImageCacheDirectory() {
  //prepare the image cache directory at temp path if it does not exist
  const defaultFileManager = NSFileManager.defaultManager();
  const imageFilesCachePath = getImageCachePath();
  if (!defaultFileManager.fileExistsAtPath(imageFilesCachePath)) {
    debug('Created image cache directory: ' + imageFilesCachePath);
    defaultFileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(imageFilesCachePath, false, null, null);
  }
}


//defaults write com.bohemiancoding.sketch3 BrandAIlocalImageCacheDisabled 1

var isCahceDisabledDefaultsValue;
const userDefaultsKey= 'BrandAIlocalImageCacheDisabled';

function isCacheDisabled() {
  if (isCahceDisabledDefaultsValue == undefined) {
    isCahceDisabledDefaultsValue = NSUserDefaults.standardUserDefaults().boolForKey(userDefaultsKey) || false;
    debug('Is local image cache disabled: ' + isCahceDisabledDefaultsValue);
  }
  return isCahceDisabledDefaultsValue;
}

function writeDataToFile(payload) {

  if (isCacheDisabled()) {
    return;
  }

  var filePath = getImagePath(payload);
  var dataURL = payload.dataURL;
  if (!filePath || !dataURL) {
    debug('You must provide valid file data and the intended data to write: ');
    debug(payload);
    return;
  }

  var fileManager = NSFileManager.defaultManager();
  var url = NSURL.URLWithString(dataURL);
  var imageData = NSData.dataWithContentsOfURL(url);

  fileManager.createFileAtPath_contents_attributes(filePath, imageData, null);
}


function readDataFromFile(image) {

  //todo: deside if turn off this in read as well, for example if some data exist we could potentially use while not storing new data
  if (isCacheDisabled()) {
    return;
  }

  if (image) {
    var imagePath = getImagePath(image);
    var imageData = NSData.dataWithContentsOfFile(imagePath);
    if (!imageData) {
      return null;
    }

    const contentType = getMimeType(image.extension);
    return dataURLFromData(imageData, contentType);
  }
}

module.exports = {
  createImageCacheDirectory: createImageCacheDirectory,
  readDataFromFile: readDataFromFile,
  writeDataToFile: writeDataToFile
};

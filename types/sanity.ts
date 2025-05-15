
export interface SanityImageAsset {
  _ref: string;  
  _type: string; 
}

export interface SanityImage {
  _type: 'image';
  asset: SanityImageAsset;
}

export interface SanityFileAsset {
  _ref: string;  
  _type: string; 
}

export interface SanityFile {
  _type: 'file';
  asset: SanityFileAsset;
}

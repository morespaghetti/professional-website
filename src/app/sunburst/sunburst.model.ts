export class SunburstData {
  name: string;
  size?: number; // Required on elements with no children
  children?: SunburstData[];

  // Sets the size of the deepest elements to 1
  static defaultSizeSet( root: SunburstData[] ){

    for( let  i=0; i<root.length; i++ ){
      if( root[i].children ){
        // Not the deepest element
        this.defaultSizeSet(root[i].children);
      }else{
        // Deepest element, set size to 1
        root[i].size= 1;
      }
    }

  }

}

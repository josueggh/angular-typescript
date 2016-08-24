class listController{
  languages : any;
  $onInit(){
    this.languages = [
      {'name':'JS'},
      {'name':'PHP'},
      {'name':'Python'},
      {'name':'C++'},
      {'name':'C#'},
      {'name':'Go'},
    ];
  }
}

export default listController;
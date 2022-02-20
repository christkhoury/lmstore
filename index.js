
fetch('https://lmstore.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
    var CH = document.getElementById('CH')
    var OriginalContent = `<div>
    <div class="icon-box">
      <i class="IC"></i>
      <h3><a href="">24/7 electricity</a></h3>
      <p class="text-white-50">Christ</p>
    </div>
  </div>`

    for(var i=0;i<json.length;i++ )
  {
      var MyContent = document.createElement('div');
      var CustomisedContent = OriginalContent;
       CustomisedContent = CustomisedContent.replace('24/7 electricity',json[i].name  );
       CustomisedContent = CustomisedContent.replace('Christ',json[i].description  );
       CustomisedContent = CustomisedContent.replace('IC',json[i].icon  );
       
       MyContent.className ='col-xl-2 col-md-4'
       MyContent.innerHTML = CustomisedContent;

      CH.appendChild(MyContent) 
  }
  
})
fetch('https://lmstore.herokuapp.com/services')
  .then(response => response.json())
  .then(json => {
    var AB = document.getElementById('AB')
    var OriginalContent2 = `<div class="icon-box">
      <div class="icon"><i class="BI"></i></div>
      <h4><a href="">Lorem Ipsum</a></h4>
      <p>ABC</p>
  </div> `


    for(var i=0;i<json.length;i++ )
  {
      var SecondContent = document.createElement('div');
      var CustomisedContent2 = OriginalContent2;
       CustomisedContent2 = CustomisedContent2.replace('Lorem Ipsum',json[i].title  );
       CustomisedContent2 = CustomisedContent2.replace('ABC',json[i].description  );
       CustomisedContent2 = CustomisedContent2.replace('BI',json[i].icon  );
  
       SecondContent.className =''
       SecondContent.innerHTML = CustomisedContent2;

      AB.appendChild(SecondContent) 
  }
  
})

window.onload = function (){
  const features = [
    {
      image:"images.css/images/undraw_happy_news_hxmt.png", 
      title:"Light,Fast & Powerful",
       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
    },
    {
      image:"images.css/images/undraw_social_influencer_sgsv.png", 
      title:"Light,Fast & Powerful",
       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
    },
    {
      image:"images.css/images/undraw_mention_6k5d.png", 
      title:"Light,Fast & Powerful",
       description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
    }
      ]
      for (let i = 0; i<features.length; i++){
        const feature = features[i]
       const image= document.createElement('img')
       image.setAttribute('src',feature.image)
       image.setAttribute('class','photo')
       const title = document.createElement('h3')
       title.textContent=feature.title
       const description = document.createElement('p')
       description.textContent=feature.description
       const div = document.createElement('div')
       div.setAttribute('class', 'text')
       div.appendChild(title)
       div.appendChild( description)
       const section = document.createElement('section')
       section.setAttribute('class','container')
       section.appendChild(image)
       section.appendChild(div)
       const form = document.getElementById('form')
       form.appendChild(section)
      }

    
         function createInputs (){
          const inputs = [
            { class: 'name', type: 'text', name: 'order-name', id: 'order-name', placeholder: 'User name' },
            { class: 'email', type: 'text', name: 'order-email', id: 'order-email', placeholder: 'Email' },
            { class: 'pay', type: 'text', name: 'order-pay', id: 'order-pay', placeholder: 'Payment method' }
        ];
        return inputs;
         }
      
        
        function createForm () {
          const isExist = document.getElementById('form1')
          if (isExist){
            return;
          }
          const section = document.createElement('section');
          section.className = 'data';
          section.id = 'form1'
          const innerDiv = document.createElement('div');
          
          const inputs = createInputs();
  
          inputs.forEach(input => {
              const div = document.createElement('div');
              const inputElement = document.createElement('input');
            
              inputElement.className = input.class;
              inputElement.type = input.type;
              inputElement.name = input.name;
              inputElement.id = input.id;
              inputElement.placeholder = input.placeholder;
  
              div.appendChild(inputElement);
              innerDiv.appendChild(div);
          });
  
          section.appendChild(innerDiv);
  
          document.getElementById('form-container').appendChild(section);
    

        }

        const uiButton =  document.getElementById('ui');
        uiButton.addEventListener('click', createForm)
}
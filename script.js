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
      
}
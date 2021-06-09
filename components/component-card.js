export default {
    data (){
        return{
         
        }
    },
    props:{
        obj: {
            type: Object,
            required: true,
          },
    },
    template:
    `<div class="col-md-6 py-2">
       <div class="card">
         <div class="card bg-dark text-white text-left">
           <img class="card-img-top img-cover" height="155" :src="obj.Picture1">
           <div class="card-img-overlay d-flex justify-content-between align-items-end p-0 px-3" style="background-color: rgba(0, 0, 0, .2)">
             <h5 class="card-img-title-lg">{{obj.Name}}</h5><h5 class="card-img-title-sm"></h5>
           </div>
         </div>
         <div class="card-body text-left">
             <p class="card-text"><i class="far fa-clock fa-clock-time"></i>&nbsp;{{obj.Opentime}}</p>
             <p class="card-text"><i class="fas fa-map-marker-alt fa-map-gps"></i>&nbsp;{{obj.Add}}</p>
             <p class="card-text"><i class="fas fa-mobile-alt fa-mobile"></i>&nbsp;{{obj.Tel}}</p>
           <div v-if="obj.Ticketinfo">           
             <p class="card-text"><i class="fas fa-tags text-warning"></i>&nbsp;{{obj.Ticketinfo}}</p>
           </div>
         </div>
       </div>
     </div>`
        
}
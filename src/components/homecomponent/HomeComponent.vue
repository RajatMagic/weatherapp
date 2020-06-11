<template>
  <div class="chart-holder" uk-parallax="bgy: -200">
      <div class="current-weather-conditions">
           <div class='brief-desc'>
                <div class="uk-flex uk-flex-center">
                    <div class="uk-card uk-card-default uk-card-body">
                         <span class='title'>Location:</span> 
                         <span class='value'>{{data.location&&data.location.city}} ({{data.location&&data.location.region.trim()}}),{{data.location&&data.location.country}}</span>
                    </div>
                    <div class="uk-card uk-card-default uk-card-body uk-margin-left"> 
                         <span class='title'>Current weather description:</span>
                          <span class='value'>{{data.item&&data.item.condition.text}}</span>
                    </div>
                    <div class="uk-card uk-card-default uk-card-body uk-margin-left"> 
                        <span class='title'>Current temperature:</span> 
                        <span class='value'>[Max] {{data.item&&data.item.condition.temp}}º{{unitsObj.temperature}} [Min] {{data.item&&data.item.condition.temp-4}}º{{unitsObj.temperature}}</span>
                    </div>
                </div>
           </div>
           <div class="view-more uk-flex uk-flex-left">
            <button class="uk-button uk-button-default" @click="toggleDetails">View More Weather Details ...</button>
           </div>
           <div v-if="showMore" class="detailed-desc" tabindex="0">
                  <div class="uk-flex uk-flex-left">
                      <div class="uk-card uk-card-default uk-card-body uk-margin-left"> 
                        <span class='title'> Wind Speed:</span> 
                        <span class='value'> {{data.wind&&data.wind.speed}}{{unitsObj.speed}}</span>
                      </div>
                     <div class="uk-card uk-card-default uk-card-body uk-margin-left"> 
                        <span class='title'> Humidity:</span> 
                        <span class='value'> {{data.atmosphere&&data.atmosphere.humidity}}</span>
                     </div>
                     <div class="uk-card uk-card-default uk-card-body uk-margin-left"> 
                        <span class='title'> Pressure:</span> 
                        <span class='value'> {{data.atmosphere&&data.atmosphere.pressure}}{{unitsObj.pressure}}</span>
                     </div>
                      <div class="uk-card uk-card-default uk-card-body uk-margin-left"> 
                        <span class='title'> Sunrise/Sunset Time:</span> 
                        <span class='value'> {{data.astronomy&&data.astronomy.sunrise}}/{{data.astronomy&&data.astronomy.sunset}}</span>
                     </div>
                  </div>
           </div>
      </div>

    <LineChart :data="newObj"  :styles="styles"/>
  </div>
</template>
<script lang="ts">
import "@/components/homecomponent/HomeComponent.less";
import HomeComponent from "@/components/homecomponent/HomeComponent";
export default HomeComponent;
</script>
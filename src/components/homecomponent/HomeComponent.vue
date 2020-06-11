<template>
  <div class="chart-holder" uk-parallax="bgy: -200">
      <div class="current-weather-conditions">
           <div class='brief-desc'>
                <div class="uk-flex uk-flex-center uk-grid-match uk-grid-small uk-text-center" uk-grid>
                    <div class="uk-card uk-card-default uk-card-body uk-width-1-4@m">
                         <span class='title'>{{getScreenText('LOCATION')}}</span> 
                         <span class='value'>{{data.location&&data.location.city}} ({{data.location&&data.location.region.trim()}}),{{data.location&&data.location.country}}</span>
                    </div>
                    <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-width-1-4@m"> 
                         <span class='title'>{{getScreenText('CURRENT_WEATHER')}}</span>
                          <span class='value'>{{data.item&&data.item.condition.text}}</span>
                    </div>
                    <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-width-1-4@m"> 
                        <span class='title'>{{getScreenText('CURRENT_WEATHER')}}</span> 
                        <span class='value'>{{getScreenText('MAX')}} {{data.item&&data.item.condition.temp}}º{{unitsObj.temperature}} {{getScreenText('MIN')}} {{data.item&&data.item.condition.temp-4}}º{{unitsObj.temperature}}</span>
                    </div>
                </div>
           </div>
           <div class="view-more uk-flex uk-flex-left">
            <button class="uk-button uk-button-default" @click="toggleDetails">{{getScreenText('VIEW_DETAILS')}}</button>
           </div>
           <div v-if="showMore" class="detailed-desc" tabindex="0">
                  <div class="uk-flex uk-flex-left uk-grid-match uk-grid-small uk-text-center" uk-grid>
                      <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-width-1-5@m"> 
                        <span class='title'> {{getScreenText('WIND_SPEED')}}</span> 
                        <span class='value'> {{data.wind&&data.wind.speed}}{{unitsObj.speed}}</span>
                      </div>
                     <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-width-1-5@m"> 
                        <span class='title'> {{getScreenText('HUMIDITY')}} </span> 
                        <span class='value'> {{data.atmosphere&&data.atmosphere.humidity}}</span>
                     </div>
                     <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-width-1-5@m"> 
                        <span class='title'> {{getScreenText('PRESSURE')}} </span> 
                        <span class='value'> {{data.atmosphere&&data.atmosphere.pressure}}{{unitsObj.pressure}}</span>
                     </div>
                      <div class="uk-card uk-card-default uk-card-body uk-margin-left uk-width-1-5@m"> 
                        <span class='title'> {{getScreenText('SUNRISE')}}</span> 
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
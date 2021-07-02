<template>
<div>
          <q-carousel
            swipeable
            animated
            arrows
            navigation
            height="300px"
            class="rounded-borders full-height"
            control-color="primary"
            v-model="slide"
          >
                <!---Selecion Multiple--->
            <q-carousel-slide :name="1" style="padding-right: 0;padding-left: 0;">
              <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div class="text-h6">Selección simple y multiple</div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La profecía de las 70 semanas de Daniel</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.i" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Jesús fue crucificado</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.ii" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Período de la supremacía papal</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.iii" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Establecimiento del papado</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.iv" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Referida a Daniel 8:14</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.v" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Empezó el juicio investigador</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.vi" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Napoleón ordenó la abolición del papado</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.vii" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Caída de las estrellas</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.viii" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Empezó el período de 2.300 años</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.ix" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Fin de las 70 semanas</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.x" :options="times" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Jesús fue bautizado</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xi" :options="times" emit-value map-options />
                    </div>
                  </div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Seleccione una o más de una:</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md justify-center">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Ungimiento del Mesías</strong>
                      <q-select disable multiple rounded outlined v-model="form.doctrine.time.xii" use-chips :options="mesias" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Reconstrucción del Muro, La Plaza y el Templo</strong>
                      <q-select disable multiple  rounded outlined v-model="form.doctrine.time.xiii" use-chips :options="reconstruccion" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El hombre nace de nuevo por medio de</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xiv" use-chips :options="nace" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La Ley de Dios es el nombre que se aplica a</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xv" use-chips :options="ley" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">En la tierra nueva nuestros seres amados serán</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xvi" use-chips :options="tierra" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El representante personal de Dios en la tierra es actualmente:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xvii" use-chips :options="representantes" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Dios se revela completamente en:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xviii" use-chips :options="dios" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La obra mediadora de Cristo fue tipificada por:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xix" use-chips :options="obra" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El juicio investigador tiene que ver con:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xx" use-chips :options="juicio" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Muerte de Cristo:</strong>
                      <q-select disable dense outlined rounded multiple v-model="form.doctrine.time.xxi" use-chips :options="muerte" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Edicto para la reconstrucción de Jerusalén:</strong>
                      <q-select disable dense outlined rounded multiple v-model="form.doctrine.time.xxii" use-chips :options="jerusalen" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Inicio del Juicio Investigador:</strong>
                      <q-select disable dense outlined rounded multiple v-model="form.doctrine.time.xxiii" use-chips :options="inicio" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El salario del pecado es la:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxiv" use-chips :options="salario" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">¿Por quién fueron creadas todas las cosas?</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxv" use-chips :options="creadas" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Cristo creó al mundo:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxvi" use-chips :options="mundo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La máxima revelación de Dios se manifiesta en:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxvii" use-chips :options="manifiesta" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El plan de salvación fue proclamado en primer lugar a:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxviii" use-chips :options="plan" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El Espíritu Santo es:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxix" use-chips :options="santo" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">En la tierra nueva nunca se sentirá:</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.time.xxx" use-chips :options="nueva" emit-value map-options />
                    </div>
                  </div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Cada persona o cosa tiene un significado profético, identifique a la persona o cosa nombrada. Las palabras para ser escogidas son las que están en la lista</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md justify-center">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Grecia</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.i" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El papado</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.ii" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Domingo</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.iii" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Sábado</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.iv" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Padre, Hijo, Espíritu Santo</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.v" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Pueblos y Multitudes</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.vi" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Medo-Persia</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.vii" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Roma</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.viii" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Babilonia</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.ix" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Jesús</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.x" use-chips :options="definitiones" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Guerras y luchas</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.definition.xii" use-chips :options="definitiones" emit-value map-options />
                    </div>
                  </div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Marque el capitulo correspondiente a la cita bíblica.</div>
                    <div class="text-h8 text-italic text-bold">No uses la Biblia</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El Mensaje de los Tres Ángeles</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.i" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Escudriñad las Escrituras.... ellas son las que dan testimonio de mi".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.ii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Temed a Dios y dadle gloria; porque la hora de su juicio es venida".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.iii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El gran capítulo de la fe</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.iv" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Porque no hará nada Jehová el Señor, sin que revele su secreto a sus siervos los profetas".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.v" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"¡Por tanto, el Hijo del Hombre es Señor aún del día reposo".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.vi" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"El juez se sentó, y los libros fueron abiertos".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.vii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Visión de las Cuatro Bestias de Daniel</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.viii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La Profecía de las 2300 tardes y mañanas</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.ix" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Luego nosotros lo que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.x" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Porque los que viven saben que han de morir; pero los muertos nada saben".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xi" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Descripción y obra de la bestia y su imagen</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"No penséis que he venido para abrogar la ley o los profetas; no he venido para abrogar sino a cumplir".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xiii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Los Diez Mandamientos.</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xiv" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Este mismo Jesús.... así vendrá como le habéis visto ir al cielo"</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xv" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Toda Escritura es inspirada divinamente".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xvi" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">"Si confesamos nuestros pecados él es fiel y justo para perdonar nuestros pecados".</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xvii" :options="bibles" emit-value map-options />
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Gran profecía de Jesús acerca de su Segunda Venida</strong>
                      <q-select disable dense outlined rounded v-model="form.doctrine.bible.xviii" :options="bibles" emit-value map-options />
                    </div>
                  </div>
              </q-scroll-area>
            </q-carousel-slide>
            <!--Verdadero Falso-->
            <q-carousel-slide :name="2" style="padding-right: 0;padding-left: 0;">
              <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div class="text-h6">Verdadero - Falso</div>
                <div class="q-pa-md row fit justify-start items-center no-wrap">
                  <!--Primera parte-->
                  <div class="col q-pa-md q-gutter-sm">
                    <q-toggle disable
                      v-model="form.doctrine.i"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El pecado tuvo su origen en la desobediencia de Adán y Eva en el jardín del edén? (${form.doctrine.i ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.iii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Los Escritores de la Biblia intentaban comprobar la existencia de Dios? (${form.doctrine.iii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.v"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Cristo ejercitó un poder para vencer a Satanás del cual nosotros no podemos disponer? (${form.doctrine.v ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.ix"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La fase ejecutiva fiel juicio se celebra en el cielo? (${form.doctrine.ix ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.vii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿En el cielo se esta llevando a cabo el Gran día de la Expiación? (${form.doctrine.vii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Las tres personas de la deidad son: Dios Padre, Dios Hijo, Dios Espíritu Santo? (${form.doctrine.xii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xiii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El plan de la salvación fue formulado como resultado de la caída del hombre.? (${form.doctrine.xiii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xvi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El hombre fue creado poco menor que los ángeles? (${form.doctrine.xvi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xviii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La fe es obediencia? (${form.doctrine.xviii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xx"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Los diez mandamientos fueron abolidos cuando Jesús murió en la cruz? (${form.doctrine.xx ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El hombre era inmortal cuando fue creado? (${form.doctrine.xxii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxiv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Sólo los que amen su venida verán venir a Jesús por segunda vez? (${form.doctrine.xxiv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxvi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Nuestros cuerpos son templos del Espíritu Santo? (${form.doctrine.xxvi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxviii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La Ley de Dios es un regalo para la humanidad? (${form.doctrine.xxviii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxx"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La iglesia será raptada antes de la segunda venida de Cristo? (${form.doctrine.xxx ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Después de la muerte de Jesús los discípulos guardaron el sábado conforme al mandamiento? (${form.doctrine.xxxii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxiv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Jesús usó en sus enseñanzas el Antiguo Testamento? (${form.doctrine.xxxiv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxvi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El verdadero profeta siempre habla en armonía con las Escrituras? (${form.doctrine.xxxvi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxviii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Pecado de Adán fue deliberado? (${form.doctrine.xxxviii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                  </div>
                  <div class="col q-pa-md q-gutter-sm">
                    <q-toggle disable
                      v-model="form.doctrine.ii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Sello del Dios vivo para nosotros hoy en día es el Santo Sábado de Cristo? (${form.doctrine.ii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.iv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Todos los santos ángeles acompañarán a Jesús en su Segunda Venida? (${form.doctrine.iv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.vi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Cristo tomó sobre sí la naturaleza humana pero no estaba sujeto a la ley? (${form.doctrine.vi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.viii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El arrepentimiento es un don de Dios? (${form.doctrine.viii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.x"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La intención original de Dios era que la familia humana viviera eternamente? (${form.doctrine.x ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El hombre es un ser dualista? (${form.doctrine.xi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xiv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La muerte de Cristo no es vicaria pero si propiciatoria? (${form.doctrine.xiv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El cristiano que no devuelve los diezmos roba a Dios? (${form.doctrine.xv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xvii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Los justos estarán en el cielo durante el milenio? (${form.doctrine.xvii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xix"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El nuevo pacto es una renovación de la herencia dada por Dios al hombre? (${form.doctrine.xix ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La iglesia cristiana fue fundada sobre Pedro? (${form.doctrine.xxi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxiii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Nadie podrá salvarse sin el conocimiento de Jesús y de la ley escrita? (${form.doctrine.xxiii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Dios quiere escribir su ley en nuestros corazones? (${form.doctrine.xxv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxvii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿La devolución de los diezmos es para recibir la bendición de Dios? (${form.doctrine.xxvii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxix"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Los fieles hombres de Dios pagaban diezmos antes del éxodo? (${form.doctrine.xxix ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxi"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El Bautismo por aspersión es una forma correcta de bautismo? (${form.doctrine.xxxi ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxiii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El hombre posee inmortalidad por naturaleza? (${form.doctrine.xxxiii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxv"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El día de Expiación era un día de juicio que tipificaba el gran día del juicio final? (${form.doctrine.xxxv ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxvii"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿Dios no se preocupa por nuestra salud física? (${form.doctrine.xxxvii ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                    <q-toggle disable
                      v-model="form.doctrine.xxxixl"
                      checked-icon="check"
                      color="green"
                      unchecked-icon="clear"
                      :label="`¿El don de profecía pudiera ser una característica del pueblo de Dios? (${form.doctrine.xxxixl ? 'Verdadero' : 'Falso'})`"
                      left-label
                      />
                  </div>
                </div>
              </q-scroll-area>
            </q-carousel-slide>
                <!---Completación--->
            <q-carousel-slide :name="3" style="padding-right: 0;padding-left: 0;">
              <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div class="text-h6">Completación</div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Escriba la frase que se necesita para comlpetar la oración</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">En el rito del lavamiento de los ___________ Jesús enseñó la dignidad del servicio</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.i"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Los ______________________ son enviados a ministrar a los herederos de la salvación</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.ii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La Biblia compara la muerte al _______________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.iii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El falso sábado de la era cristiana es el __________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.iv"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La ______________ del _________________fue el acto culminante de la creación de Dios</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.v"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">En relación con las ofrendas Dios dice: "Dios ama al dador _____________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.vi"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Dios promete revelar sus secretos mediante los ___________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.vii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La oración es el ______________ del alma</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.viii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La ___________________, es la agencia señalada por Dios para la salvación del Hombre</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.ix"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La sangre derramada por Cristo está representada por el __________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.x"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El sábado es un recordativo de la ________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xi"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Amarás a_______________________como a ti mismo</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El arrepentimiento es un _________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xiii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">En el segundo día de la creación Dios _________________________________.</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xix"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La Biblia revela a ___________ y expone a la ____________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xx"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La justificación es lo que Dios ____________ para nosotros, mientras la santificación es lo que Dios ___________________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xxi"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El ________________ tipifica morir al pecado y ser resucitado a novedad de vida.</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xxii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Sólo hay salvación en___________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xxiii"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La obediencia a los _________________________es la prueba de nuestro amor a Dios.</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xxiv"/>
                    </div>
                    <div style="padding-right: 10px;padding-top: 1em;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La justicia de Cristo se nos he _______________________</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.complete.xxv"/>
                    </div>
                  </div>
              </q-scroll-area>
            </q-carousel-slide>
                <!---Definiciones--->
            <q-carousel-slide :name="4" style="padding-right: 0;padding-left: 0;">
              <q-scroll-area
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                    style="height: 37em; max-width: 100% !important;"
                  >
                <div class="text-h6">Definición</div>
                  <div class=" text-center no-wrap justify-around q-px-md q-pt-md">
                    <div class="text-h6">Responda cad pregunta dentro de la casilla correspondiente</div>
                  </div>
                  <div class="row q-px-md items-start q-pa-md">
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">¿Qué festividad recordaba a los judíos el sacrificio futuro de Cristo antes de la crucifixión?</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.escribe.i"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">¿Cuál es el único mandamiento que tiene que ver con tiempo?</strong>
                      <q-input disable dense outlined rounded v-model="form.doctrine.escribe.ii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">Anote las 4 condiciones que afectan la respuesta de Dios a nuestras oraciones</strong>
                      <q-input disable  autogrow dense outlined rounded v-model="form.doctrine.escribe.iii"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">La señal o sello de lealtad a Dios es la observancia de:</strong>
                      <q-input disable  autogrow dense outlined rounded v-model="form.doctrine.escribe.iv"/>
                    </div>
                    <div style="padding-right: 10px;" class="col-xs-8 col-sm-6 col-md-5 col-lg-2 col-xl-2 text-center">
                      <strong class="text-italic">El poder para hacer riquezas proviene de:</strong>
                      <q-input disable  autogrow dense outlined rounded v-model="form.doctrine.escribe.v"/>
                    </div>
                  </div>
                    <div class="q-pa-xs text-center text-bold text-italic text-center items-center justify-center row">Aprobación para la Prueba de Doctrinas Biblicas: 
                      <vs-checkbox @click="changeEvaluated(form.aprovation)" style="padding-left: 8px;" v-model="form.aprovation.doctrine">
                        <template #icon>
                          <q-icon name="done_all"/>
                        </template>
                      </vs-checkbox>
                    </div>
              </q-scroll-area>
            </q-carousel-slide>
          </q-carousel>
        </div>
</template>
<script>
export default {
  mounted () {
    this.form = JSON.parse(this.$q.sessionStorage.getItem('form'))
  },
  data () {
    return {
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
      alert: true,
      test: true,
      slide: 1,
      screen: true,
      form: {
        doctrine: {
          time: {},
          bible: {},
          complete: {},
          definition: {},
          escribe: {}
        },
        aprovation: {}
      },
      plan: [
        {
          label: 'María',
          value: 1
        },
        {
          label: 'Moisés',
          value: 2
        },
        {
          label: 'Adán',
          value: 3
        },
        {
          label: 'Los pastores',
          value: 4
        }
      ],
      santo: [
        {
          label: 'Intercesor',
          value: 1
        },
        {
          label: 'Abogado',
          value: 2
        },
        {
          label: 'Juez',
          value: 3
        },
        {
          label: 'Consolador',
          value: 4
        }
      ],
      nueva: [
        {
          label: 'Cansancio',
          value: 1
        },
        {
          label: 'Amor',
          value: 2
        },
        {
          label: 'Hambre',
          value: 3
        },
        {
          label: 'Sed',
          value: 4
        }
      ],
      manifiesta: [
        {
          label: 'En su Palabra',
          value: 1
        },
        {
          label: 'La naturaleza',
          value: 2
        },
        {
          label: 'La familia',
          value: 3
        },
        {
          label: 'La persona de su Hijo',
          value: 4
        }
      ],
      mundo: [
        {
          label: 'Mediante un proceso de evolución',
          value: 1
        },
        {
          label: 'Del polvo de las estrellas',
          value: 2
        },
        {
          label: 'Separando la tierra del agua',
          value: 3
        },
        {
          label: 'Por su palabra',
          value: 4
        }
      ],
      salario: [
        {
          label: 'Vida eterna',
          value: 1
        },
        {
          label: 'Muerte',
          value: 2
        },
        {
          label: 'Tentación',
          value: 3
        },
        {
          label: 'Separación de Dios',
          value: 4
        }
      ],
      creadas: [
        {
          label: 'Por Dios el Padre',
          value: 1
        },
        {
          label: 'Por Gabriel',
          value: 2
        },
        {
          label: 'Por el Hijo de Dios',
          value: 3
        },
        {
          label: 'Por Lucifer',
          value: 4
        }
      ],
      inicio: [
        {
          label: 'Dan. 9:27 primero',
          value: 1
        },
        {
          label: 'Dan. 9:27 segundo',
          value: 2
        },
        {
          label: 'Tercer evento',
          value: 3
        },
        {
          label: '457 a.C',
          value: 4
        },
        {
          label: 'Dan. 9:25',
          value: 5
        },
        {
          label: 'Primer evento',
          value: 6
        },
        {
          label: '27 d.C',
          value: 7
        },
        {
          label: '34 d.C',
          value: 8
        },
        {
          label: 'Sexto evento',
          value: 9
        },
        {
          label: 'Cuarto evento',
          value: 10
        },
        {
          label: 'Quinto evento',
          value: 11
        },
        {
          label: '408 d.C',
          value: 12
        },
        {
          label: '1844',
          value: 13
        },
        {
          label: '31 d.C.',
          value: 14
        },
        {
          label: 'Esd. 7:11-26',
          value: 15
        },
        {
          label: 'Segundo evento',
          value: 16
        },
        {
          label: 'Dan. 8:13,14',
          value: 17
        }
      ],
      definitiones: [
        {
          label: 'Leopardo',
          value: 1
        },
        {
          label: 'Cuerno Pequeño',
          value: 2
        },
        {
          label: 'La marca de la Bestia',
          value: 3
        },
        {
          label: 'La trinidad',
          value: 4
        },
        {
          label: 'Aguas',
          value: 5
        },
        {
          label: 'Oso',
          value: 6
        },
        {
          label: 'Bestia sin descripción',
          value: 7
        },
        {
          label: 'León',
          value: 8
        },
        {
          label: 'Mediador',
          value: 9
        },
        {
          label: 'Bestias',
          value: 10
        },
        {
          label: 'Vientos',
          value: 11
        },
        {
          label: 'Sello de Dios',
          value: 12
        }
      ],
      jerusalen: [
        {
          label: 'Esd. 7:11-26',
          value: 1
        },
        {
          label: 'Dan. 9:27 segundo',
          value: 2
        },
        {
          label: 'Primer evento',
          value: 3
        },
        {
          label: 'Segundo evento',
          value: 4
        },
        {
          label: 'Sexto evento',
          value: 5
        },
        {
          label: 'Cuarto evento',
          value: 6
        },
        {
          label: 'Dan. 8:13,14',
          value: 7
        },
        {
          label: 'Quinto evento',
          value: 8
        },
        {
          label: 'Tercer evento',
          value: 9
        },
        {
          label: '34 d.C',
          value: 10
        },
        {
          label: '27 d.C',
          value: 11
        },
        {
          label: 'Dan. 9:27 primero',
          value: 12
        },
        {
          label: '408 d.C',
          value: 13
        },
        {
          label: 'Dan. 9:25',
          value: 14
        },
        {
          label: '457 a.C',
          value: 15
        },
        {
          label: '31 d.C.',
          value: 16
        },
        {
          label: '1844',
          value: 17
        }
      ],
      muerte: [
        {
          label: '34 d.C',
          value: 1
        },
        {
          label: '408 d.C',
          value: 2
        },
        {
          label: 'Dan. 9:27 primero',
          value: 3
        },
        {
          label: 'Segundo evento',
          value: 4
        },
        {
          label: 'Quinto evento',
          value: 5
        },
        {
          label: 'Cuarto evento',
          value: 6
        },
        {
          label: '27 d.C',
          value: 7
        },
        {
          label: 'Primer evento',
          value: 8
        },
        {
          label: '31 d.C.',
          value: 9
        },
        {
          label: 'Esd. 7:11-26',
          value: 10
        },
        {
          label: '1844',
          value: 11
        },
        {
          label: 'Dan. 9:27 segundo',
          value: 12
        },
        {
          label: 'Tercer evento',
          value: 13
        },
        {
          label: 'Sexto evento',
          value: 14
        },
        {
          label: '457 a.C',
          value: 15
        },
        {
          label: 'Dan. 9:25',
          value: 16
        },
        {
          label: 'Dan. 8:13,14',
          value: 17
        }
      ],
      juicio: [
        {
          label: 'El juicio a los malos, hecho por los santos',
          value: 1
        },
        {
          label: 'El juicio de Cristo ante Pilatos',
          value: 2
        },
        {
          label: 'La destrucción de los malvados',
          value: 3
        },
        {
          label: 'La investigación que hará Dios de los registros de sus profesos hijos',
          value: 4
        }
      ],
      obra: [
        {
          label: 'Los servicios del santuario terrenal',
          value: 1
        },
        {
          label: 'El juicio en el santuario celestial',
          value: 2
        },
        {
          label: 'Su muerte en la cruz',
          value: 3
        },
        {
          label: 'El rito de la Cena del Señor',
          value: 4
        }
      ],
      dios: [
        {
          label: 'La naturaleza',
          value: 1
        },
        {
          label: 'Jesucristo',
          value: 2
        },
        {
          label: 'La Biblia',
          value: 3
        },
        {
          label: 'Los ángeles',
          value: 4
        }
      ],
      representantes: [
        {
          label: 'El Espíritu Santo',
          value: 1
        },
        {
          label: 'El presidente de la Asociación General',
          value: 2
        },
        {
          label: 'El ángel Gabriel',
          value: 3
        },
        {
          label: 'El Papa',
          value: 4
        }
      ],
      tierra: [
        {
          label: 'Extraños',
          value: 1
        },
        {
          label: 'Desconocidos por nosotros',
          value: 2
        },
        {
          label: 'Olvidados',
          value: 3
        },
        {
          label: 'Reconocidos',
          value: 4
        }
      ],
      ley: [
        {
          label: 'La Regla de Oro',
          value: 1
        },
        {
          label: 'Las leyes que gobernaban el campamento del Antiguo Israel',
          value: 2
        },
        {
          label: 'El credo de los apóstoles',
          value: 3
        },
        {
          label: 'Los Diez Mandamientos',
          value: 4
        }
      ],
      nace: [
        {
          label: '<b>A</b>. El arrepentimiento',
          value: 1
        },
        {
          label: '<b>B</b>. Guardar el sábado',
          value: 2
        },
        {
          label: '<b>C</b>. El bautismo',
          value: 3
        },
        {
          label: '<b>D</b>. La Palabra de Dios',
          value: 4
        }
      ],
      bibles: [
        {
          label: '<b>A</b>. Apoc. 14',
          value: 1
        },
        {
          label: '<b>B</b>. Juan 5:39',
          value: 2
        },
        {
          label: '<b>C</b>. Apoc. 14:7',
          value: 3
        },
        {
          label: '<b>D</b>. Heb. 11',
          value: 4
        },
        {
          label: '<b>E</b>. Amos 3:7',
          value: 5
        },
        {
          label: '<b>F</b>. Mar. 2:28',
          value: 6
        },
        {
          label: '<b>G</b>. Dan. 7:10',
          value: 7
        },
        {
          label: '<b>H</b>. Daniel 7',
          value: 8
        },
        {
          label: '<b>I</b>. Dan 8:14',
          value: 9
        },
        {
          label: '<b>J</b>. 1 Tes. 4:17',
          value: 10
        },
        {
          label: '<b>K</b>. Ecl. 9:5',
          value: 11
        },
        {
          label: '<b>L</b>. Apoc. 13',
          value: 12
        },
        {
          label: '<b>M</b>. Mat. 5:17',
          value: 13
        },
        {
          label: '<b>N</b>. Éx. 20',
          value: 14
        },
        {
          label: '<b>O</b>. Hechos 1:11',
          value: 15
        },
        {
          label: '<b>P</b>. 2 Tim. 3:16',
          value: 16
        },
        {
          label: '<b>Q</b>. 1 Juan 1:9',
          value: 17
        },
        {
          label: '<b>R</b>. Mat. 24',
          value: 18
        }
      ],
      mesias: [
        {
          label: '<b>A</b>. Segundo evento',
          value: 1
        },
        {
          label: '<b>B</b>. Tercer evento',
          value: 2
        },
        {
          label: '<b>C</b>. Dan. 8:13,14',
          value: 3
        },
        {
          label: '<b>D</b>. Sexto evento',
          value: 4
        },
        {
          label: '<b>E</b>. 1844',
          value: 5
        },
        {
          label: '<b>F</b>. 408 d.C',
          value: 6
        },
        {
          label: '<b>G</b>. 34 d.C',
          value: 7
        },
        {
          label: '<b>H</b>. 27 d.C',
          value: 8
        },
        {
          label: '<b>I</b>. Primer evento',
          value: 9
        },
        {
          label: '<b>J</b>. Dan. 9:27 segundo',
          value: 10
        },
        {
          label: '<b>K</b>. Dan. 9:27 primero',
          value: 11
        },
        {
          label: '<b>L</b>. Esd. 7:11-26',
          value: 12
        },
        {
          label: '<b>M</b>. Quinto evento',
          value: 13
        },
        {
          label: '<b>N</b>. Cuarto evento',
          value: 14
        },
        {
          label: '<b>O</b>. Dan. 9:25',
          value: 15
        },
        {
          label: '<b>P</b>. 31 d.C.',
          value: 16
        },
        {
          label: '<b>Q</b>. 457 a.C',
          value: 17
        }
      ],
      reconstruccion: [
        {
          label: '<b>A</b>. Segundo evento',
          value: 1
        },
        {
          label: '<b>B</b>. Dan. 9:25 ',
          value: 2
        },
        {
          label: '<b>C</b>. Cuarto evento ',
          value: 3
        },
        {
          label: '<b>D</b>. Dan. 9:27 primero',
          value: 4
        },
        {
          label: '<b>E</b>. 27 d.C ',
          value: 5
        },
        {
          label: '<b>F</b>. 31 d.C.',
          value: 6
        },
        {
          label: '<b>G</b>. Tercer evento ',
          value: 7
        },
        {
          label: '<b>H</b>. 408 d.C ',
          value: 8
        },
        {
          label: '<b>I</b>. Esd. 7:11-26 ',
          value: 9
        },
        {
          label: '<b>J</b>. 34 d.C',
          value: 10
        },
        {
          label: '<b>K</b>. 1844',
          value: 11
        },
        {
          label: '<b>L</b>. 457 a.C ',
          value: 12
        },
        {
          label: '<b>M</b>. Dan. 8:13,14 ',
          value: 13
        },
        {
          label: '<b>N</b>. Quinto evento',
          value: 14
        },
        {
          label: '<b>O</b>. Dan. 9:27 segundo ',
          value: 15
        },
        {
          label: '<b>P</b>. Primer evento ',
          value: 16
        },
        {
          label: '<b>Q</b>. Sexto evento ',
          value: 17
        }
      ],
      times: [
        {
          label: '457 A.C.-34 D.C',
          value: 1
        },
        {
          label: 'Año 31 D.C',
          value: 2
        },
        {
          label: '1260 años',
          value: 3
        },
        {
          label: '538 D.C',
          value: 4
        },
        {
          label: '2300 años',
          value: 5
        },
        {
          label: '1844',
          value: 6
        },
        {
          label: '1798',
          value: 7
        },
        {
          label: 'Nov. 13, 1833',
          value: 8
        },
        {
          label: '457 A.C',
          value: 9
        },
        {
          label: '34 D.C',
          value: 10
        },
        {
          label: '27 D.C',
          value: 11
        }
      ]
    }
  },
  methods: {
    async changeEvaluated (info) {
      await this.$api.put('Change_aprovation_doctrine', info).then(res => {
        this.$vs.notification({
          color: 'success',
          position: 'bottom-center',
          title: '¡Muy Bien!',
          text: 'Se ha cambiado de manera exitosa el resultado de la evaluación de Doctrinas Biblicas del Aspirante'
        })
      })
    }
  }
}
</script>

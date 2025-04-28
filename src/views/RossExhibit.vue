<script setup>
import { store } from '../store/store.js'
import { ref } from 'vue'
const happyAccident = ref(false)
const techniqueRevealed = ref(false)
const paletteExpanded = ref(false)
const toggleTechnique = () => {
  techniqueRevealed.value = !techniqueRevealed.value
}

const blinkTechniqueDemo = () => {
  techniqueRevealed.value = false
  setTimeout(() => {
    techniqueRevealed.value = true
  }, 100)
}
</script>

<template>
  <div>
    <div class="page">
      <div class="card">
        <header class="card-header">Ross Exhibit</header>
        <img alt="Bob Ross" src="/bobross.jpeg" />

        <div v-if="store.mode === 'easy'" class="text-body">
          <p>
            Bob Ross was a super chill painter with a giant poofy afro and the calmest voice ever.
            He had a TV show called <em>The Joy of Painting</em>, where he showed people how to
            paint cool nature scenes like snowy mountains, peaceful lakes, and his favorite—"happy
            little trees"!
          </p>

          <button @click="happyAccident = !happyAccident" class="interactive-button">
            {{ happyAccident ? 'Hide' : 'Show' }} Happy Accident
          </button>

          <div v-if="happyAccident" class="interactive-content">
            <p>
              🎨 Bob's famous saying:
              <strong>"We don't make mistakes, just happy little accidents."</strong>
            </p>
          </div>
        </div>

        <div v-if="store.mode === 'medium'" class="text-body">
          <p>
            Robert Norman "Bob" Ross (1942-1995) was an American painter, art instructor, and
            television host. He created and hosted <em>The Joy of Painting</em>, which aired from
            1983 to 1994 on PBS stations.
          </p>

          <p>
            Ross developed the "wet-on-wet" oil painting technique, allowing him to complete
            paintings in about 30 minutes. His calm demeanor and encouraging phrases made art
            accessible to millions.
          </p>

          <button @click="toggleTechnique" class="interactive-button">
            {{ techniqueRevealed ? 'Hide' : 'Show' }} Wet-on-Wet Technique
          </button>

          <div v-if="techniqueRevealed" class="interactive-content">
            <ol>
              <li>Start with a thin base coat of liquid white</li>
              <li>Paint background to foreground</li>
              <li>Work quickly before layers dry</li>
              <li>Use firm brushes for texture</li>
            </ol>
            <div class="technique-demo">
              <div class="painting-step" @click="blinkTechniqueDemo">
                <div
                  class="canvas"
                  :style="{ background: 'linear-gradient(to bottom, #87CEEB 30%, #FFFFFF 100%)' }"
                ></div>
                <p>Sky</p>
              </div>
              <div class="painting-step" @click="blinkTechniqueDemo">
                <div
                  class="canvas"
                  :style="{ background: 'linear-gradient(to bottom, #228B22 10%, #006400 90%)' }"
                ></div>
                <p>Mountains</p>
              </div>
              <div class="painting-step" @click="blinkTechniqueDemo">
                <div
                  class="canvas"
                  :style="{
                    background: 'linear-gradient(to bottom, #000000 10%, #8B4513 90%)',
                    height: '20px',
                  }"
                ></div>
                <p>Tree trunks</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="store.mode === 'hard'" class="text-body">
          <p>
            Bob Ross's impact on art education and popular culture extends far beyond his television
            program. His approach combined elements of traditional landscape painting with mass
            media accessibility, creating a unique pedagogical model that democratized art
            instruction.
          </p>

          <p>
            Ross's color palette was intentionally limited to 13 colors, which he used to create his
            characteristic landscapes. This restricted palette was part of his teaching methodology,
            demonstrating that complex paintings could be achieved with minimal materials.
          </p>

          <button @click="paletteExpanded = !paletteExpanded" class="interactive-button">
            {{ paletteExpanded ? 'Hide' : 'Show' }} Full Color Palette
          </button>

          <div v-if="paletteExpanded" class="interactive-content">
            <div class="color-palette">
              <div
                v-for="color in [
                  { name: 'Titanium White', hex: '#F0F0F0' },
                  { name: 'Alizarin Crimson', hex: '#E32636' },
                  { name: 'Cadmium Yellow', hex: '#FFF600' },
                  { name: 'Phthalo Blue', hex: '#000F89' },
                  { name: 'Van Dyke Brown', hex: '#664228' },
                  { name: 'Dark Sienna', hex: '#3C1414' },
                  { name: 'Sap Green', hex: '#507D2A' },
                  { name: 'Yellow Ochre', hex: '#CB9D06' },
                  { name: 'Bright Red', hex: '#DB0000' },
                  { name: 'Phthalo Green', hex: '#123524' },
                  { name: 'Prussian Blue', hex: '#003153' },
                  { name: 'Midnight Black', hex: '#000000' },
                  { name: 'Liquid Clear', hex: '#F8F8FF' },
                ]"
                :style="{ backgroundColor: color.hex }"
                :title="color.name"
              >
                <span class="color-label">{{ color.name }}</span>
              </div>
            </div>
            <p class="palette-note">Hover over the colors to see their names</p>
          </div>

          <p class="footnote">
            Ross completed an estimated 30,000 paintings during his lifetime, though only about
            1,000 were documented for his television series. His work continues to influence
            contemporary art education methodologies.
          </p>
        </div>
      </div>

      <div>
        <router-link to="/artshow"><Button class="next-button" @click="">></Button></router-link>
        <router-link to="/ballex"><Button class="back-button" @click=""><</Button></router-link>
      </div>
    </div>
  </div>
</template>

<style>
.technique-demo {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.painting-step {
  text-align: center;
  cursor: pointer;
}

.canvas {
  width: 80px;
  height: 60px;
  margin: 0 auto 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.color-palette {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 15px 0;
}

.color-palette div {
  height: 60px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #e0e0e0;
}

.color-palette div:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.color-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 3px;
  font-size: 0.7rem;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.color-palette div:hover .color-label {
  transform: translateY(0);
}

.palette-note {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 10px;
}

.footnote {
  font-size: 0.9rem;
  font-style: italic;
  color: #555;
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
}

@media (max-width: 768px) {
  .color-palette {
    grid-template-columns: repeat(3, 1fr);
  }

  .technique-demo {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .painting-step {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .color-palette {
    grid-template-columns: repeat(2, 1fr);
  }

  .difficulty-selector {
    flex-direction: column;
    gap: 5px;
  }

  .difficulty-selector button {
    width: 100%;
    margin: 2px 0;
  }
}
</style>

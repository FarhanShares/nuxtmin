<template>
  <transition name="app-modal-fade">
    <div v-show="show" tabindex="-1" :style="style" :class="['app-modal', className]" @keyup.esc="onEsc">
      <div  v-if="mask" class="app-modal-mask" :style="customMaskStyles" @click="onClickMask"  />
      <transition :name="`app-modal-${animation}`">
        <div v-show="show" class="app-modal-dialog" :style="dialogStyle">
          <span v-if="closeButton" class="app-modal-close" @click="$emit('hide')" />
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AppModal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 240
    },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'zoom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    customStyles: {
      type: Object,
      default: () => ({})
    },
    customMaskStyles: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    style() {
      return {
        animationDuration: `${this.duration}ms`
      };
    },
    dialogStyle() {
      return {
        width: this.width + this.measure,
        height: this.height + this.measure,
        animationDuration: `${this.duration}ms`,
        ...this.customStyles
      }
    }
  },
  watch: {
    show(isShow) {
      isShow && this.$nextTick(() => {
        this.$el.focus();
      })
    }
  },
  methods: {
    onEsc() {
      if (this.show && this.closeOnEsc) {
        this.$emit('hide');
      }
    },
    onClickMask() {
      this.$emit('clickMask');
      if (this.closeOnClickMask) {
        this.$emit('hide');
      }
    }
  }
})
</script>

<style scoped>
.app-modal,
.app-modal-mask {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}

.app-modal {
    position: fixed;
}

.app-modal-mask {
    position: absolute;
    background: rgba(0, 0, 0, .3);
}

.app-modal-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    /* padding: 15px; */
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
}

.app-modal-close {
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    z-index: 9999;
}

.app-modal-close:before,
.app-modal-close:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    -webkit-transition: background .2s;
    transition: background .2s;
}

.app-modal-close:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.app-modal-close:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.app-modal-close:hover:before,
.app-modal-close:hover:after {
    background: #333;
}

/* -- fade -- */
@-webkit-keyframes app-modal-fade-enter {
    from {
        opacity: 0;
    }
}

@keyframes app-modal-fade-enter {
    from {
        opacity: 0;
    }
}

.app-modal-fade-enter-active {
    -webkit-animation: app-modal-fade-enter both ease-in;
    animation: app-modal-fade-enter both ease-in;
}

@-webkit-keyframes app-modal-fade-leave {
    to {
        opacity: 0
    }
}

@keyframes app-modal-fade-leave {
    to {
        opacity: 0
    }
}

.app-modal-fade-leave-active {
    -webkit-animation: app-modal-fade-leave both ease-out;
    animation: app-modal-fade-leave both ease-out;
}

/* -- zoom -- */
@-webkit-keyframes app-modal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes app-modal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.app-modal-zoom-enter-active {
    -webkit-animation: app-modal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: app-modal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes app-modal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes app-modal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.app-modal-zoom-leave-active {
    -webkit-animation: app-modal-zoom-leave both;
    animation: app-modal-zoom-leave both;
}
</style>

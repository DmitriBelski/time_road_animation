<template>
  <div class="body">
    <b-form-input class="mb-5" type="range" v-model.number="range" min="0" :max="totalStep" step="1" v-stream:input="moveRange$"></b-form-input>

    <div class="widgetBody">
      <div class="dividerContainer" v-html="dividerHtml"></div>
      <svg v-on:mouseenter="onLabel(index)" v-on:mouseleave="offLabel(index)" v-for="(label, index) in labelsToRender" :key="index"  viewBox="0 0 111 179.35885" :style="`position: absolute; width: ${label.width}px; left: ${label.left}px; top: ${label.top}px;`">   
        <radialGradient id="labelShadow" cx="55.5" cy="163.93028" r="23.34577" gradientTransform="translate(0 81.96514) scale(1 0.5)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#404040"/>
          <stop offset="0.26541" stop-color="#4d4e4e" stop-opacity="0.918"/>
          <stop offset="0.49162" stop-color="#636466" stop-opacity="0.78492"/>
          <stop offset="0.56999" stop-color="#5d5e60" stop-opacity="0.65937"/>
          <stop offset="1" stop-color="#404040" stop-opacity="0"/>
        </radialGradient>
        <path style="fill:#63cdfe;stroke:#fff;stroke-miterlimit:10;stroke-width:7px;fill-rule:evenodd;" d="M107.5,55.62873a52.00282,52.00282,0,1,0-66.89259,49.93221l12.03215,39.35389a3.03339,3.03339,0,0,0,5.72091,0l12.03214-39.3539A52.11462,52.11462,0,0,0,107.5,55.62873Z"/>
        <ellipse style="fill:url(#labelShadow);opacity: 65%;" cx="55.5" cy="163.93028" rx="29.18919" ry="15.42857"/>
      </svg>
            
      <div class="boxShadow"></div>
      <svg :width="frontLenght" :height="height" :viewBox="`0 ${1389.5-height} ${frontLenght} ${height}`">
        <path id="p1" class="a" d="M106,1389C564,1114,811.21982,777,811.21982,0H793C793,777,515,1113,0,1389.5Z"/>
        <path id="p2" class="b" d="M829.43964,0C829.43964,777,613,1114,213,1389H106C564,1114,811.21982,777,811.21982,0Z"/>
        <path id="p3" class="a" d="M320,1389C662,1113,847.65946,777,847.65946,0H829.43964C829.43964,777,613,1114,213,1389Z"/>
        <path id="p4" class="b" d="M865.87927,0C865.87927,777,711,1114,427,1389H320C662,1113,847.65946,777,847.65946,0Z"/>
        <path id="p5" class="a" d="M534,1389C760,1114,884.09909,777,884.09909,0H865.87927C865.87927,777,711,1114,427,1389Z"/>
        <path id="p6" class="b" d="M902.31891,0C902.31891,777,809,1114,640,1389H534C760,1114,884.09909,777,884.09909,0Z"/>
        <path id="p7" class="a" d="M747,1389C858,1114,920.53873,777,920.53873,0H902.31891C902.31891,777,809,1114,640,1389Z"/>
        <path id="p8" class="b" d="M938.75855,0C938.75855,777,907,1114,854,1389H747C858,1114,920.53873,777,920.53873,0Z"/>
        <path id="p9" class="a" d="M957.5,1389.5,957,0H938.75855C938.75855,777,907,1114,854,1389Z"/>
        <path id="p10" class="b" d="M956.5,1389.5,957,0h18.24145C975.24145,777,1007,1114,1060,1389Z"/>
        <path id="p11" class="a" d="M975.24145,0C975.24145,777,1007,1114,1060,1389h107C1056,1114,993.46127,777,993.46127,0Z"/>
        <path id="p12" class="b" d="M1167,1389C1056,1114,993.46127,777,993.46127,0h18.21982C1011.68109,777,1105,1114,1274,1389Z"/>
        <path id="p13" class="a" d="M1011.68109,0C1011.68109,777,1105,1114,1274,1389h106C1154,1114,1029.90091,777,1029.90091,0Z"/>
        <path id="p14" class="b" d="M1380,1389C1154,1114,1029.90091,777,1029.90091,0h18.21982C1048.12073,777,1203,1114,1487,1389Z"/>
        <path id="p15" class="a" d="M1048.12073,0C1048.12073,777,1203,1114,1487,1389h107C1252,1113,1066.34054,777,1066.34054,0Z"/>
        <path id="p16" class="b" d="M1594,1389C1252,1113,1066.34054,777,1066.34054,0h18.21982C1084.56036,777,1301,1114,1701,1389Z"/>
        <path id="p17" class="a" d="M1084.56036,0C1084.56036,777,1301,1114,1701,1389h107C1350,1114,1102.78018,777,1102.78018,0Z"/>
        <path id="p18" class="b" d="M1808,1389C1350,1114,1102.78018,777,1102.78018,0H1121c0,777,278,1113,793,1389.5Z"/>
      </svg>
      <div class="boxShadow"></div>
    </div>
    <div class="titleContainer">
      <div v-for="(title, index) in columnTitle" :key="index">
        <div :id="`t${index}`" class="centered">
          <span class="title">{{title}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Observable } from 'rxjs';
require('rxjs/add/observable/interval');
require('rxjs/add/operator/map'); // потоку дается значение, возвращаемое функцией принимающей последнее значение потока (или не принимающее значений), функция запускается каждый раз
require('rxjs/add/operator/switchMap'); // представляет собой комбинацию switchAll и map. switchAll отменяет предыдущую подписку и подписывается на новую
require('rxjs/add/operator/switchMapTo');
require('rxjs/add/operator/takeWhile');
require('rxjs/add/operator/do'); // очень удобно для логирования значений в потоке, не меняет значений, только пропускает через себя
require('rxjs/add/operator/repeat');
require('rxjs/add/operator/bufferTime');
require('rxjs/add/operator/take');

export default {
  name: 'svgAnimations',
  domStreams: ["moveRange$"],
  subscriptions() {
    const time = 1000 * this.moveTime / this.moveStep // кол-во милисекунд делим на количество шагов
    const interval$ = Observable.interval(time).take(this.moveStep)

    const data = {start: this.range, end: this.range}

    const createEaseArr = data => end => {
      data.start = this.lastMoveRange
      data.end = parseInt(end)
      // заполняем массив easeRange
      this.easeRange.length = 0
      for (let i=0; i<this.moveStep; i++) {
        this.easeRange.push(this.floor3(data.start + this.easeOut[i] * (data.end - data.start)))
      }
      return end
    }

    const range$ = this.moveRange$
      .map((event) => event.event.msg) // сюда прямиком поступают данные с ползунка
      .bufferTime(100) // должно быть больше time, например в 2 раза
      .map(arr => arr[arr.length-1])
      .takeWhile(vl => vl !== undefined, false).repeat()
      .switchMap(createEaseArr(data))//.do(() => console.log('hi'))
      .switchMapTo(interval$)//.do((x) => console.log(this.easeRange[x]))
      .map((x) => this.moveHtml(this.easeRange[x])) 
    // const watchData$ = Observable.of(data) // если захочется понаблюдать data
    return {
      range$,
      // watchData$,
    }
  },
  data() {
    return {
      scaler: 2, // множитель, который увеличивает range до realRange и frameRange до realFrame, чем он больше, тем больше видимое растояние между объектами в виджете
      frontLenght: 1914, // длина ближнего края
      height: 1050, // высота виджета
      range: 100, // сюда идут данные с ползунка - это номер шага ползунка - и стартовае положение ползунка
      totalStep: 1000, // количество шагов в ленте, передается как максимальное значение в range-ползунке
      frameRange: 216, // кол-во шагов ползунка в окне видимости
      realFrame: null, // умножается на scaler в mounted
      oneDaySteps: 5, // кол-во шагов в одном дне
      dayDivide: 7, // сколько дней между разделителями
      dividerStep: null, // кол-во шагов между разделителями - устанавливаем в mounted
      dividerHtml: '', // код для разделителей
      dividers: [], // массив с позициями всех разделителей, в шагах - устанавливаем в mounted
      dividersInFrame: [], // разделители попавшие в окно видимости - из позиции относительно ближнего края
      divedersToRender: [], // сюда на каждом шаге (кадре) записываются параметры разделителей (длина, высота) для создания их через v-for
      // массив с позициями всех значков, в шагах в масштабе totalStep - умножается на scaler в mounted
      labels: [{col: 4, step: 300},{col: 4, step: 850},{col: 5, step: 100},{col: 10, step: 800},{col: 14, step: 400},{col: 15, step: 100},{col: 16, step: 800},{col: 18, step: 950},
              {col: 2, step: 900},{col: 4, step: 750},{col: 5, step: 200},{col: 10, step: 500},{col: 13, step: 600},{col: 16, step: 200},{col: 17, step: 300},{col: 18, step: 500},
              {col: 1, step: 700},{col: 4, step: 550},{col: 5, step: 300},{col: 9, step: 600},{col: 14, step: 550},{col: 16, step: 400},{col: 17, step: 350},{col: 18, step: 300},
              {col: 1, step: 500},{col: 5, step: 350},{col: 6, step: 500},{col: 9, step: 300},{col: 15, step: 350},{col: 17, step: 200},{col: 17, step: 850},{col: 18, step: 700},
              {col: 3, step: 300},{col: 5, step: 250},{col: 7, step: 700},{col: 8, step: 700},{col: 15, step: 250},{col: 17, step: 600},{col: 17, step: 950},{col: 18, step: 200},
              {col: 3, step: 100},{col: 6, step: 150},{col: 8, step: 900},{col: 8, step: 250},{col: 13, step: 800},{col: 17, step: 325},{col: 17, step: 50},{col: 18, step: 100},
      ], 
      labelsInFrame: [], // значки попавшие в окно видимости - из позиции относительно ближнего края
      labelsToRender: [], // сюда на каждом шаге (кадре) записываются параметры значков (длина, высота, масштаб) для создания их через v-for
      enterToRenderIndex: [null, null, null], // индекс активного значка в массиве labelsToRender - для отслеживания наведения мыши во время движения, также его уникальные параметры (col, step) - для снятия фокуса мыши, при исчезновении значка за краем фрейма
      columnTitle: ['Франция','Италия','Германия','Словения','Испания','Португалия','Бельгия','Люксембург','Швейцария','Великобритания','Ирландия','Польша','Чехия','Австрия','Словакия','Нидерланды','Дания','Швеция'],
      moveStep: 100, // кол-во сгенерированных шагов в скачке - чем больше тем плавнее движение
      moveTime: 1, // время в секундах прошедшее за скачок
      zeroToOne: [], // массив равномерных чисел от 0 до 1 - устанавливаем в mounted
      easeOut: [], // массив значений easeOut от аргументов из zeroToOne
      easeRange: [], // массив с позициями на ближнем крае, которые для плавности посылаются ассинхронно в "moveHtml", "moveStep" раз в "moveTime" секунд
      lastMoveRange: 0, // moveHtml(range,Range) запишет сюда полученный Range, а ассинхронная часть возьмет ее отсюда чтобы поместить в data.start
    }
  },
  methods: {
    // запускается асинхронно с разным range для плавного хода, "moveStep" раз в "moveTime" секунд
    moveHtml(range) {
      const r = range * this.scaler
      // стерли массив из разделителей попавших в окно видимости
      this.dividersInFrame.length = 0
      this.dividerHtml = ''
      // обновляем массив из разделителей попавших в окно видимости
      for (let i=0; i<this.dividers.length; i++) {
        if (this.dividers[i] >= r && this.dividers[i] < r + this.realFrame) {
          this.dividersInFrame.push(this.floor2(this.dividers[i] - r))
          let x = this.dividersInFrame.length - 1
          this.dividerHtml += `<span style="position: absolute; border: solid 1px #999; width: ${this.dLenght(this.dividersInFrame[x])}px; left: ${(this.floor2(this.frontLenght-this.dLenght(this.dividersInFrame[x])))/2}px; top: ${this.dHeight(this.dividersInFrame[x])}px;"></span>`
        }
      }
      // обновляем массив из значков попавших в окно видимости
      this.labelsInFrame.length = 0
      this.labelsToRender.length = 0
      for (let i=0; i<this.labels.length; i++) {
        if (this.labels[i].step >= r && this.labels[i].step < r + this.realFrame - 25) { //  - 25 подобрал эмпирически - чтобы не вылазило за экран виджета сверху
          this.labelsInFrame.push({col: this.labels[i].col, step: this.floor2(this.labels[i].step - r)})
          let y = this.labelsInFrame.length - 1
          let width = 130 * this.dScale(this.labelsInFrame[y].step)
          let height = width * 208.11 / 128.8
          // отрисовка через v-for - параметры записываем в массив labelsToRender
          this.labelsToRender.push({
            width: width, 
            left: this.floor2((this.frontLenght-this.dLenght(this.labelsInFrame[y].step))/2 + this.dLenght(this.labelsInFrame[y].step)/18 * (this.labelsInFrame[y].col - 0.5) - width/2),
            top: this.floor2(this.dHeight(this.labelsInFrame[y].step) - height * 0.92)
          })
          if (this.enterToRenderIndex[0] === y) {this.mouseEncrease(y)}
        }
      }
      // если индексы в labelsInFrame сменились, то нужно обновить индекс выделения, найдя в labelsInFrame новый индекс выделеного значка, а если не найден, значит он ушел за горизонт и включаем this.offLabel()
      if (this.enterToRenderIndex[0] !== null) {
        if (this.labelsInFrame.length < this.enterToRenderIndex[0]) { // индекс выделения вышел за пределы массива labelsInFrame, значит точно надо искать новый индекс
          this.__handleEnterToRenderIndex()
        } else { // индекс выделения еще в пределах массива labelsInFrame, ищем новый индекс только если col и step не совпадают
          if (this.labelsInFrame[this.enterToRenderIndex[0]].col !== this.enterToRenderIndex[1] && this.labelsInFrame[this.enterToRenderIndex[0]].step !== this.enterToRenderIndex[2]) {
            this.__handleEnterToRenderIndex()
          }
        }
      }
      // для обеспечения плавности движения - при получении новых данных с ползунка, в то время пока еще не закончилось движение, this.lastMoveRange помещается в data.start асинхронной части
      this.lastMoveRange = range
    },
    __handleEnterToRenderIndex() { // вынесено в отдельную функцию, чтобы не дублировать код в комплексной if проверке
      let found = false
      // ищем в в labelsInFrame новый индекс выделеного значка
      for (let i=0; i<this.labelsInFrame.length; i++) {
        if (this.labelsInFrame[i].col == this.enterToRenderIndex[1] && this.labelsInFrame[i].step == this.enterToRenderIndex[2]) {
          this.enterToRenderIndex[0] = i // записываем новый индекс
          found = true
          break
        }
      }
      if (!found) {this.offLabel(null)} // значок ушел за горизонт - индекса нет - передаем null
    },
    // длина разделителя в процентах от длины ближнего края, от растояния в шагах от ближего края
    dLenght(position) {
      let x = 1.79 + position/this.dividerStep // аргумент x в этой функции начинается с 1.79 для точности, подогнано визуально в экселе при сравнении кривых функций
      x = this.floor4(x)
      let a = 1.5933*Math.pow(x,-0.8) // эта степенная функция - основа данных вычислений
      a = this.floor4(a)
      if (a>0.7011) {
        a += -0.0308 * Math.pow(x,2) + 0.1415 * x - 0.1546 // в определенном интервале небходимо уточнение, так как степенная функция не дает нужной точности
        a = this.floor4(a)
      } else if (a<0.7011 && a>0.4527) {
        a -= -0.0077 * Math.pow(x,2) + 0.0586 * x - 0.10355 // в определенном интервале небходимо уточнение, так как степенная функция не дает нужной точности
        a = this.floor4(a)
      }
      return this.floor2(this.frontLenght*a)
    },
    // высота в пикселях разделителя от ближнего края, от растояния в шагах от ближего края
    dHeight(position) {
      let x = 1 + position/this.dividerStep // аргумент x в этой функции начинается с 1
      x = this.floor2(x)
      // считаем две функции a и b,которые потом дополнят друг друга по условию
      let a = -22.25 * Math.pow(x,2) + 247.55 * x - 225.3
      a = this.floor2(a)      
      let b = 0.24 * Math.pow(x,3) + 15.14 * Math.pow(x,2) - 114.83 * x + 203.06
      b = this.floor2(b) 
      if (a>403 || b>150) {
        return this.floor2(this.height - (a + b))
      } else {
        return this.floor2(this.height - a)
      }
    },
    // размер иконок и шрифтов в процентах от заданного стандарта, от растояния в шагах от ближего края
    dScale(position) {
      let x = 2 + position/this.dividerStep // аргумент x в этой функции начинается с 2
      x = this.floor4(x)
      x = -0.0009 * Math.pow(x,3) + 0.028 * Math.pow(x,2) - 0.307 * x + 1.5
      return this.floor4(x)
    },  
    mouseEncrease(index) {
      let increase = 1.5
      this.labelsToRender[index].left -= this.labelsToRender[index].width * (increase-1) / 2
      this.labelsToRender[index].top -= this.labelsToRender[index].width * 208.11 / 128.8 * (increase-1)
      this.labelsToRender[index].width *= increase
    },
    onLabel(index) {
      this.mouseEncrease(index)
      this.enterToRenderIndex[0] = index
      this.enterToRenderIndex[1] = this.labelsInFrame[index].col
      this.enterToRenderIndex[2] = this.labelsInFrame[index].step
      document.querySelector(`#p${this.labelsInFrame[index].col}`).style.fill = '#BF5410' // изменим цвет полоски при наведении на значок
      // нижние тайтлы
      for (let i=0; i<18; i++) {
        if (i%2 == 1) {
          document.querySelector(`#t${i}`).style.backgroundColor = '#6F645D'
        } else {
          document.querySelector(`#t${i}`).style.backgroundColor = '#958C84'
        }
      }
      document.querySelector(`#t${this.labelsInFrame[index].col-1}`).style.backgroundColor = '#BF5410'
    },   
    offLabel(index)  {
      if (index !== null) { // если значок выделенным ушел за границу, то приходит не index а null
        let increase = 1.5
        this.labelsToRender[index].left += this.labelsToRender[index].width * (1-1/increase) / 2
        this.labelsToRender[index].top += this.labelsToRender[index].width * 208.11 / 128.8 * (1-1/increase)        
        this.labelsToRender[index].width /= increase
      } 
      this.enterToRenderIndex[0] = null
      this.enterToRenderIndex[1] = null
      this.enterToRenderIndex[2] = null
      // возвращаем цвет столбцам
      let color = ''
      if (index == null) {// придется перебирать все столбцы
        for (let i=0;i<18;i++) {
          (i+1) % 2 == 1 ? color = '#e8e8e8' : color = '#ccc'
          document.querySelector(`#p${i+1}`).style.fill = color
        }
      } else { // index известен - меняем цвет в конкретном столбце
        this.labelsInFrame[index].col % 2 == 1 ? color = '#e8e8e8' : color = '#ccc'
        document.querySelector(`#p${this.labelsInFrame[index].col}`).style.fill = color
      }
      // нижние тайтлы
      for (let i=0; i<18; i++) {
        if (i%2 == 1) {
          document.querySelector(`#t${i}`).style.backgroundColor = '#BF5410'
        } else {
          document.querySelector(`#t${i}`).style.backgroundColor = '#D98031'
        }
      }
    },
    // округляем до 4 знаков после запятой
    floor2(x) {
      return Math.floor(x * 100) / 100
    },     
    floor3(x) {
      return Math.floor(x * 1000) / 1000
    }, 
    floor4(x) {
      return Math.floor(x * 10000) / 10000
    }
  },
  mounted() {
    this.lastMoveRange = this.range
    this.realFrame = this.frameRange * this.scaler
    // кол-во шагов между разделителями
    this.dividerStep = this.dayDivide * this.oneDaySteps
    // создаем массив разделителей с их позициями в шагах умноженными на scaler
    var divideCount = Math.floor(this.totalStep / this.dividerStep) 
    for (let i=0; i<divideCount; i++) {
      this.dividers.push(i*this.dividerStep*this.scaler)
    }
    // создаем массив из разделителей попавших в окно видимости
    for (let i=0; i<this.dividers.length; i++) {
      if (this.dividers[i] >= this.range * this.scaler && this.dividers[i] < this.range * this.scaler + this.realFrame) {
        this.dividersInFrame.push(this.dividers[i] - this.range * this.scaler)
        let x = this.dividersInFrame.length - 1
        this.dividerHtml += `<span style="position: absolute; border: solid 1px #999; 
        width: ${this.dLenght(this.dividersInFrame[x])}px; 
        left: ${(this.floor2(this.frontLenght-this.dLenght(this.dividersInFrame[x])))/2}px; 
        top: ${this.dHeight(this.dividersInFrame[x])}px;"></span>`
      }

    }
    // создаем массив из разделителей попавших в окно видимости
    for (let i=0; i<this.labels.length; i++) {
      this.labels[i].step *= this.scaler // умножим все позиции на скалер
      if (this.labels[i].step >= this.range * this.scaler && this.labels[i].step < this.range * this.scaler + this.realFrame) {
        this.labelsInFrame.push({col: this.labels[i].col, step: this.labels[i].step - this.range * this.scaler})
        let y = this.labelsInFrame.length - 1
        let width = 130 * this.dScale(this.labelsInFrame[y].step)
        let height = width * 208.11 / 128.8
        // параметры записываем в массив для отрисовки через v-for
        this.labelsToRender.push({
          width: this.enterToRenderIndex === y ? width * 1.5 : width, 
          left: this.floor2((this.frontLenght-this.dLenght(this.labelsInFrame[y].step))/2 + this.dLenght(this.labelsInFrame[y].step)/18 * (this.labelsInFrame[y].col - 0.5) - width/2),
          top: this.floor2(this.dHeight(this.labelsInFrame[y].step) - height * 0.92)
        })
      }
    }
    // заполним массив zeroToOne
    this.zeroToOne.push(0)
    for (let i=1; i<this.moveStep; i++) {
      this.zeroToOne.push(this.zeroToOne[i-1] + 1/(this.moveStep-1))
    }
    // заполним массив easeOut - применяем Ease-out функцию
    for (let i=0; i<this.moveStep; i++) {
      // this.easeOut[i] = this.floor3(2*this.zeroToOne[i]-Math.pow(this.zeroToOne[i],2)) // резковато тормозит в конце
      // this.easeOut[i] = this.floor3(3*this.zeroToOne[i]-2*Math.pow(this.zeroToOne[i],1.5)) // плавнее в конце 
      this.easeOut[i] = this.floor3(4*this.zeroToOne[i]-3*Math.pow(this.zeroToOne[i],1.33)) // еще плавнее в конце 
      this.zeroToOne[i] = this.floor3(this.zeroToOne[i])
    }
  }
};
</script>

<style src="./svgAnimations.scss" lang="scss" />

export const clickOutside = {
  // вызывается перед монтированием родительского компонента, к элементу которого привязана директива;
  mounted(el, binding) {
    // el - DOM-элемент в котором прописана директива
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        // binding.value - это значение(функция), которое прописано в директиве v-click-outside;
        // event, el - параметры, которые мы передаем функции(значению)
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  // вызывается только один раз, когда директива отвязывается от элемента и родительский компонент размонтирован;
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};

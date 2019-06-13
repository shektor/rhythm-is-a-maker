function toggleButton(button){

    let buttonClasses = button.classList;

    if (buttonClasses.contains('button-active')) {
      buttonClasses.remove('button-active')
    } else {
      buttonClasses.add('button-active')
    };
  };

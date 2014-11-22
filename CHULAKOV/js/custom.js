              // toggle меню для устройств с маленьким расширением
             $(".button-menu").click(function () {
                 $(".menu-mobile").toggle("slide");
             });

              // Свое правило валидации
             jQuery.validator.addMethod("author", function (value, element) {
                 return this.optional(element) || (!(/([^A-Za-z\s])/.test(value)));
             }, "");

              // Валидация полей карты
             $('#card').validate({
                 rules: {
                     card_field_1: {
                         required: true,
                         digits: true,
                         maxlength: 4,
                         minlength: 4

                     },

                     card_field_2: {
                         required: true,
                         digits: true,
                         maxlength: 4,
                         minlength: 4

                     },


                     card_field_3: {
                         required: true,
                         digits: true,
                         maxlength: 4,
                         minlength: 4

                     },


                     card_field_4: {
                         required: true,
                         digits: true,
                         maxlength: 4,
                         minlength: 4
                     },


                     author: {
                         author: true,
                         required: true,
                         minlength: 4
                     },

                     cvv: {
                         required: true,
                         digits: true
                     }


                 },

                 // Обработчик собитий на отправку форму
                 submitHandler: function (form) {
                     //Опопвещакм что форма отправлена
                     alert("Submitted!");
                     //Отправляем форму
                     form.submit();

                 }
             });
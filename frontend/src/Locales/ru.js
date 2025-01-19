const translation = {
  translation: {
    loginForm: {
      title: "Войти",
      username: "Ваш ник",
      password: "Ваш пароль",
      submitButton: "Войти",
      feedBack: "Неправильные имя или пароль"
    },
    signupForm: {
        title: 'Регистрация',
        username: 'Имя пользователя',
        password: 'Пароль',
        confirmPass: 'Подтвердите пароль',
        submitButton: 'Зарегистрироваться',
        errors: {
          usernameRange: 'От 3 до 20 символов',
          usernameExist: 'Такой пользователь уже существует',
          passwordRange: 'Не менее 6 символов',
          passwordConfirm: 'Пароли должны совпадать',
          required: 'Обязательное поле',
        },
        button: 'Зарегистрироваться',
      },
      notFoundPage: {
        logoAlt: 'Страница не найдена',
        title: 'Страница не найдена',
        text: 'Но вы можете перейти ',
        link: 'на главную страницу',
      },
      chatPage: {
        title: 'Каналы',
      },
      messageInput: {
        label: 'Новое сообщение',
        placeholder: 'Введите сообщение...',
        submitButton: 'Отправить',
      },
      chatBox: {
        messages_one: '{{count}} сообщение',
        messages_few: '{{count}} сообщения',
        messages_many: '{{count}} сообщений',
      },
      channels: {
        removeButton: 'Удалить',
        renameButton: 'Переименовать',
      },
      modal: {
        label: 'Имя канала',
        validation: {
          notOneOf: 'Должно быть уникальным',
          range: 'От 3 до 20 символов',
        },
        add: {
          title: 'Добавить канал',
          cancelButton: 'Отменить',
          submitButton: 'Отправить',
        },
        delete: {
          title: 'Удалить канал',
          body: 'Уверены?',
          cancelButton: 'Отменить',
          removeButton: 'Удалить',
        },
        rename: {
          title: 'Переименовать канал',
          cancelButton: 'Отменить',
          submitButton: 'Отправить',
        },
      },
      toastify: {
        error: {
          connectionError: 'Ошибка соединения',
          authError: 'Ошибка авторизации',
        },
        success: {
          channel: {
            add: 'Канал создан',
            rename: 'Канал переименован',
            remove: 'Канал удалён',
          },
        },
      },
  },
};

export default translation;
function createUserList() {
  return [
    {
      userId: 1,
      headerImgUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: "admin",
      name: 'admin',
      password: "123456",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ['cuser.detail'],
      routes: ["home"],
      token: "Admin Token"
    },
    {
      userId: 2,
      headerImgUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: "system",
      name: 'system',
      password: "123456",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ['cuser.detail','cuser.user'],
      routes: ["system"],
      token: "System Token"
    },
    {
      userId: 3,
      headerImgUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: "liangch",
      name: '梁朝华',
      password: "123456",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ['cuser.detail'],
      routes: ["home"],
      token: "Admin Token2"
    },
  ];
}


export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    methods: 'post',
    response: (({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find((item) => {
        return item.username === username && item.password === password
      })
      if(!checkUser) {
        return { code: 400, data: { message: '账号或密码不正确' }}
      }
      let { token } = checkUser
      return { code: 200, data: { token }}
    })
  },
  // 获取用户信息
  {
    url: '/api/user/userInfo',
    methods: 'get',
    response: ((request: any) => {
      const token = request.headers.token
      const checkUser = createUserList().find((item) => {
        return item.token === token
      })
      if(!checkUser) {
        return { code: 400, data: { message: 'token失效' }}
      }
      return { code: 200, data: { checkUser }}
    })
  }
]
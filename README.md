#   知乎助手 with TS

#   使用方式
1.  基础依赖
    1.  [node 10以上版本](https://nodejs.org/zh-cn/)
        1.  请先安装node
2.  下载本项目
    1.  ![下载项目代码](http://ww1.sinaimg.cn/large/6671cfa8ly1g0468fcolbj20es081glv.jpg)
3.  执行命令
    1.  在命令行中cd到项目文件夹下, 依次执行以下命令
    2.  `npm install  --registry=https://registry.npm.taobao.org` => 安装依赖
    3.  `npm run build` => 编译项目代码
    4.  `npm run buildgui` => 编译图形界面代码
    5.  `npm run start` => 启动图形界面
4.  在图形界面中, **登陆知乎**, 然后根据提示填入任务配置, 点击生成任务配置按钮
5.  弹框提示任务配置生成完毕后, 执行
    1.  `npm run ace Dispatch:Task`, 即可生成相应电子书

#   项目目标

1.  基于TS
2.  搭配图形界面
3.  通过抓取知乎接口将指定专栏转换为epub电子书

#   路线图
1.  基础功能
    - [x]    抓取用户回答
    - [x]    导出用户回答
    - [x]    抓取收藏夹
    - [x]    导出收藏夹
    - [x]    抓取话题精华回答
    - [x]    导出话题精华回答
    - [ ]    自定义抓取问题/回答/文章列表
    - [x]    抓取专栏文章
    - [x]    导出专栏文章
    - [x]    抓取用户行为记录
    - [x]    导出用户点赞的所有文章/回答
    - [x]    使用基础命令, 派发进程
2.  扩展功能
    - [x]    导出为单页HTML
    - [x]    导出为epub
    - [ ]    按赞同数/创建时间 正序/倒序 导出文章/答案
    - [x]    添加升级检测, 从服务器获取cookie
    - [x]    添加图形界面, 利用Electron创建图形界面/登陆知乎/生成命令配置
    - [x]    利用Electron根据命令启动配置
    - [x]    在Electron展示后端运行日志
    - [ ]    获取问题/回答/文章时, 统一使用标准的answer/article接口进行获取, 保证数据结构一致性(需要了解知乎接口相关参数原理)
    - [x]    能够自动读取上一次生成的配置文件, 而不是每次都需要重新输入
    - [ ]    能够按照赞同/答案长度等指标过滤答案
    - [ ]    开始运行时在前端界面自动检测升级, 并给与提示
3.  todo
    - [x]    将type声明改为使用namespace形式进行声明
    - [x]    将view改为使用类继承方式进行实现
    - [x]    输出目录结构
    - [x]    当用户回答为空时, 需要跳过渲染环节
    - [x]    解决GUI下看不到运行日志的问题
    - [x]    解决GUI版本无法生成epub文件
    - [x]    解决GUI版本无法将生成结果从缓存文件夹中复制到输出文件夹中的问题
    - [ ]    为电子书添加封面
    - [ ]    解决Edge浏览器下用户头像过大问题
    - [ ]    解决目录列表页显示有空行的问题
    - [ ]    解决多看电子书结尾处右下角会换行的问题

#   epub库功能
目前没有较好的epub生成库, 自己实现一个
待实现功能
1.  自动生成目录
2.  支持添加图片/html/css资源
3.  支持添加目录, 目录位于第一条

#   代码规范
1.  变量命名规范
    1.  类型统一使用namespace方式声明, 导入时使用`Type + xxx`形式进行导入
    2.  Model导入时统一使用`M + xxx`形式进行导入
    3.  View导入时统一使用`View + xxx`形式进行导入
    4.  Util工具函数导入时统一使用`xxx + Util`形式进行导入
    5.  async函数前统一添加`async`前缀, 以和正常函数进行区分
2.  文件命名规范
    1.  统一使用下划线方式命名

#   开发说明

1.  建议只开发命令版
    1.  使用`npm run ace`启动
2.  GUI版需要为Electron编译sqlite3, 非常麻烦, 不建议尝试
    1.  编译指南: https://www.cnblogs.com/DonaHero/p/9809325.html
    2.  流程
        1.  Windows用户
            1.  安装[VS 2015社区版](http://download.microsoft.com/download/B/4/8/B4870509-05CB-447C-878F-2F80E4CB464C/vs2015.com_chs.iso), 是的你没看错
            2.  文件-新建项目-Visual C++ -> 选择 安装vs2015所需的C++开发环境
            3.  好了一个小时过去了
            6.  执行 `npm run rebuild-electron-with-sqlite3`, 编译完成sqlite3之后, 就可以启动GUI界面了
        2.  Mac用户
            1.  我没有mac谢谢
    3.  注意:
        1.  打包时会向dist目录中复制一份node_modules目录, 导致npm run 时优先从dist中获取node_module信息, 导致无法启动
            1.  因此, 打包结束后需要将dist里的node_modules目录删掉, 以免影响后续开发工作
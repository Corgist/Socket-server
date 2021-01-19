from models.base_model import SQLModel


class Todo(SQLModel):
    """
    面向 TODO 的 CRUD
    C create 创建数据
    R read 读取数据
    U update 更新数据
    D delete 删除数据
    """
    sql_create = '''
    CREATE TABLE `todo` (
        `id`       INT NOT NULL AUTO_INCREMENT,
        `title`    VARCHAR(255) NOT NULL,
        `user_id`  INT NOT NULL,
        PRIMARY KEY (`id`)
    );
    '''

    def __init__(self, form):
        super().__init__(form)
        self.title = form.get('title', '')
        # 和别的数据关联的方式, 用 user_id 表明拥有它的 user 实例
        self.user_id = form.get('user_id', None)

    @classmethod
    def add(cls, form, user_id):
        form['user_id'] = user_id
        t = Todo.new(form)
        return t


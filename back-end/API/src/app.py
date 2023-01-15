from flask import Flask, jsonify, Response, request
from config import config
from flask_mysqldb import MySQL
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)

connection = MySQL(app)


@app.route('/get_curso/<int:id>')
def get_curso(id):
    try:
        cursor = connection.connection.cursor()
        sql = "SELECT id, title, description, creator FROM cursos WHERE id = " + str(id)
        cursor.execute(sql)
        curso = cursor.fetchone()
        curso = {
            'id': curso[0],
            'title': curso[1],
            'description': curso[2],
            'creator': curso[3],
            'image': app.config['SERVER_NAME'] + '/img/' + str(curso[0])
        }
        
        sql = "SELECT title FROM videos WHERE id_curso = " + str(id)
        cursor.execute(sql)
        videos = cursor.fetchall()
        curso['videos'] = []
        if videos:
            for row in videos:
                curso['videos'].append({
                    'title': row[0]
                })
        return jsonify({'curso': curso})
    except Exception as ex:
        return jsonify({'mensaje': 'Error'})

@app.route('/get_cursos')
def get_cursos():
    try:
        cursor = connection.connection.cursor()
        sql = "SELECT id, title, description, creator FROM cursos"
        cursor.execute(sql)
        datas = cursor.fetchall()
        cursos = []
        for row in datas:
            curso = {'id': row[0], 'name': row[1], 'description': row[2], 'creator': row[3], 'image': app.config['SERVER_NAME'] + '/img/' + str(row[0])}
            cursos.append(curso)
        return jsonify({'cursos': cursos})
    except Exception as ex:
        print(ex)
        return jsonify({'mensaje': 'Error'})
    
@app.route('/get_cursos/<int:limit>')
def get_cursos_limit(limit):
    try:
        cursor = connection.connection.cursor()
        sql = "SELECT id, title, description, creator FROM cursos ORDER BY id ASC LIMIT " + str(limit)
        cursor.execute(sql)
        datas = cursor.fetchall()
        cursos = []
        for row in datas:
            curso = {'id': row[0], 'name': row[1], 'description': row[2], 'creator': row[3], 'image': app.config['SERVER_NAME'] + '/img/' + str(row[0])}
            cursos.append(curso)
        return jsonify({'cursos': cursos})
    except Exception as ex:
        return jsonify({'mensaje': 'Error'})
    
@app.route('/img/<int:id>')
def get_img(id):
    cursor = connection.connection.cursor()
    sql = "SELECT img, mimetype FROM cursos WHERE id = " + str(id)
    cursor.execute(sql)
    img = cursor.fetchone()
    if not img:
        return "No existe imagen para este curso", 404
    return Response(img[0], mimetype=img[1])


@app.route('/video/<int:id>')
def get_video(id):
    cursor = connection.connection.cursor()
    sql = "SELECT url FROM videos WHERE id = " + str(id)
    cursor.execute(sql)
    video = cursor.fetchone()
    print(video)
    if not video:
        return "No existe video para este id", 404
    return Response(video[0])


@app.route('/login', methods=['POST'])
def login():
    _json = request.json
    _username = _json['username']
    _password = _json['password']
    if _username and _password:
        cursor = connection.connection.cursor()
        sql = "SELECT password FROM usuarios WHERE username=%s"
        sql_where = (_username,)
        cursor.execute(sql, sql_where)
        row = cursor.fetchone()
        password = row[0]
        if row:
            if check_password_hash(password, _password):
                cursor.close()
                return jsonify({'login' : True})
            else:
                return jsonify({'mensaje' : 'La contraseña no es válida'})
    else:
        return jsonify({'mensaje' : 'Las credenciales no son válidas'})
    

@app.route('/sign-up', methods=['POST'])
def sign_up():
    _json = request.json
    _username = _json['username']
    _password = _json['password']
    _password = generate_password_hash(_password)
    _name = _json['name']
    _lastname = _json['lastname']
    _email = _json['email']
    cursor = connection.connection.cursor()
    sql = "SELECT * FROM usuarios WHERE username=%s"
    sql_where = (_username,)
    cursor.execute(sql, sql_where)
    row = cursor.fetchone()
    if row:
        return jsonify({'mensaje' : 'El usuario ya existe'})
    else:
        sql = "INSERT INTO usuarios (username, name, lastname, email, password) VALUES (%s, %s, %s, %s, %s)"
        val = (_username, _name, _lastname, _email, _password)
        cursor.execute(sql, val)
        connection.connection.commit()
        cursor.close()
        return jsonify({'Register' : True})
    
@app.route('/edit/<username>', methods=['PUT'])
def edit(username):
    _json = request.json
    _password = _json['password']
    _password = generate_password_hash(_password)
    _name = _json['name']
    _lastname = _json['lastname']
    _email = _json['email']
    cursor = connection.connection.cursor()
    sql = "SELECT * FROM usuarios WHERE username=%s"
    sql_where = (username,)
    cursor.execute(sql, sql_where)
    row = cursor.fetchone()
    if not row:
        return jsonify({'mensaje' : 'El usuario no existe'})
    else:
        sql = "UPDATE usuarios SET name = %s, lastname = %s, email = %s, password = %s WHERE username = %s"
        val = (_name, _lastname, _email, _password, username)
        cursor.execute(sql, val)
        connection.connection.commit()
        cursor.close()
        return jsonify({'Update' : True})

    
def page_not_found(error):
    return "<h1>La página que intentas buscar no existe</h1>"

if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.register_error_handler(404, page_not_found)
    app.run()
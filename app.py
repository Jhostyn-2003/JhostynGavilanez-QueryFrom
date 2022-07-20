# Tarea 1 Formulario con JQuery 

# Se importan las librerias necesarias para trabajar con el framwork Flask
from flask import Flask, render_template
import os

# Se crea la aplicacion
app = Flask(__name__)

"""
Este es el paquete para llamar los templates estaticos que estan en la carpeta
de templates, como los css ,javscript y imagenes.
"""
app._static_folder = os.path.abspath("templates/static/")


# controlador  ruta para la pagina principal
@app.route("/")
def index():
    return render_template("layouts/index.html")


"""
Se ejeuta la aplicacion en modo debug, esto para que se pueda ver los 
cambios en el codigo sin necesidad de reiniciar el servidor
"""
if __name__ == '__main__':
    app.run(debug=True)
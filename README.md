# How To Get Started

* Clone this repo.
* Create a new Python virtual environment for the template and install streamlit:
```
$ cd template
$ python3 -m venv venv  # create venv
$ . venv/bin/activate   # activate venv
$ pip install streamlit # install streamlit
```
* Initialize and run the component template frontend:
```
$ cd template/my_component/frontend
$ npm install    # Install npm dependencies
$ npm run start  # Start the Webpack dev server
```
* From a separate terminal, run the template's Streamlit app:
```
$ cd template
$ . venv/bin/activate  # activate the venv you created earlier
$ pip install -e . # install template as editable package
$ streamlit run my_component/example.py  # run the example
```

## Helpful Notes:

* The "my_component" directory has the streamlit app and the custom input field component (coded in Typescript)
* The layout of the app is wrong and will need to be adjusted. Basically the custom input field component will need to be fixed to the bottom of the screen and the messages will need to render above it. This may be a little tricky since the elements in a streamlit app render from top-down by default.
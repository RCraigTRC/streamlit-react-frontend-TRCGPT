import streamlit as st
from my_component import my_component

if query := my_component():
    st.session_state.messages.append({"role": "user", "content": query})
    with st.chat_message("user"):
        st.markdown(query)


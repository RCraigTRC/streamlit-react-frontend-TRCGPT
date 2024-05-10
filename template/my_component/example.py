import streamlit as st
from my_component import my_component

st.session_state['messages'] = []

# if 'messages' not in st.session_state:
#     st.session_state['messages'] = [{"role": "assistant", 
#                                     "content": "Hi! I am TRC's smart AI. How can I help you today?"}]
    
if query := my_component():
    st.session_state.messages.append({"role": "user", "content": query})

for message in st.session_state.messages:
    if message["role"] == 'assistant':
        with st.chat_message(message["role"], avatar="🤖"):
            st.markdown(message["content"])
    else:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])



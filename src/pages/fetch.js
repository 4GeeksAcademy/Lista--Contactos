const BASE_URL = "https://playground.4geeks.com/contact/agendas/agenda-gene";

export const CreateAgenda = async () => {
  try {
    const response = await fetch(BASE_URL,{
      method : "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok){
      console.log("Agenda lista");
      return true;
    }
  } catch (error){
    console.log ("error agenda", error);
  }
};


export const GetAllUsers = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    if (response.status === 404){
      await CreateAgenda();
      return;
    }
    if (!response.ok) throw new Error("No se pudo obtener los contactos");
    const data = await response.json();

    dispatch({
      type: "set_usuarios",
      payload: data.contacts
    });
  }
  catch (error) {
    console.log("Error en GetAllUsers", error);
  }
};


export const CreateContact = async (newContact, dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact)
    });

    if (response.ok) {
     await GetAllUsers(dispatch);
     return true;
    }
    return false;

  } catch (error) {
    console.log("Error crear contacto", error);
    return false;
  }
};


export const DeleteContact = async (id, dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      GetAllUsers(dispatch);
      console.log("Contacto eliminado correctamente")
    }
  }
  catch (error) {
    console.log("Error al borrar contacto", error);
  }
}
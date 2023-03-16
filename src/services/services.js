const baseURL = "http://localhost:3001";

export async function getAnFamilia() {
  try {
    const res = await fetch(`${baseURL}/antecedentes_familiares`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getAnFamiliaById(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/antecedentes_familiares/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function UpdateAnFamilia(id_paciente, datos) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/antecedentes_familiares/${id_paciente}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function InsertAnFamilia(id_paciente, datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/antecedentes_familiares/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

///////////////////////////////////////////////
export async function getAnPersonales() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(
      `${baseURL}/antecedentes_personales`,
      requestOptions
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}
export async function getAnPersonalesById(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/antecedentes_personales/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function UpdateAnPersonales(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/antecedentes_personales/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function InsertAnPersonales(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/antecedentes_personales/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

//////////////////////////////////////////////////

export async function getHistoria() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${baseURL}/historia_clinica`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

//acca
export async function getHistoriaById(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/historia_clinica/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function UpdateHistoriaById(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/historia_clinica/${id_paciente}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", error);
  }
}

export async function insertHistoriaById(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/historia_clinica/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

//////////////////////////////////////////////////
export async function getProfesionales() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(`${baseURL}/profesionales`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getProfesionalById(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/profesionales/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getEmailProById(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/emailPro/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}



export async function getEmailPacById(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/emailPac/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getPerfilPro(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/perfil-pro/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getProfesionalesByEmail(email) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(email),
  };
  try {
    const res = await fetch(`${baseURL}/email-pro`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getProfesionalesByArea(datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const res = await fetch(`${baseURL}/probyarea`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function UpdateProfesional(id_pro, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const res = await fetch(
      `${baseURL}/profesionales/${id_pro}`,
      requestOptions
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(err.message);
  }
}

////////////////////////////////////////////////////////////

export async function getPacientes() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(`${baseURL}/pacientes`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getPacientesById(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/pacientes/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function verPerfilPac(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/perfil-pac/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getPacientesByEmail(email) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(email),
  };
  try {
    const res = await fetch(`${baseURL}/email-pac`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function UpdatePaciente(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/pacientes/${id_paciente}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function UpdatePerfilPac(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/update-perfil-pac/${id_paciente}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}
/////////////////////////////////////

export async function getHabitos() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${baseURL}/habitos`, requestOptions);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getHabitosById(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/habitos/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function UpdateHabitosFisio(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/habitos/${id_paciente}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function InsertHabitos(id_paciente, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/habitos/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

//////////////////////////////////////////////////
export async function LoginProfesionales(datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const res = await fetch(`${baseURL}/login/profesionales`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function AuthPasswordPro(id_pro, datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const res = await fetch(`${baseURL}/authpassword/profesionales/${id_pro}`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function ResetPro(id_pro, datos) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/resetpassword_pro/${id_pro}`,
      requestOptions
    );
    const data = response.json();
    return data;
  } catch (error) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", error);
  }
}

export async function RegisterPro(datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/register-profesionales`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}


export async function deleteProAccount(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/profesionales/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

////////////////////////////////////////////////////////
export async function LoginPacientes(datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const res = await fetch(`${baseURL}/login/pacientes`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function ResetPac(id_paciente, datos) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/resetpassword_pac/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}


export async function AuthPasswordPac(id_paciente, datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const res = await fetch(`${baseURL}/authpassword/pacientes/${id_paciente}`, requestOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function RegisterPac(datos) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/register-pacientes`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function deletePacAccount(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/pacientes/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

////////////////////////////////////////////////////////
// export async function getTurnos() {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const requestOptions = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   try {
//     const response = await fetch(`${baseURL}/turnos`, requestOptions);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Ocurrio un error: ", error);
//   }
// }

export async function getTurnosByPac(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/turnosbypac/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getTurnosByPro(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/ver-turnos/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getAllTurnosByPro(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/ver-all-turnos/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function getTurnosForPac(id_pro, id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id_paciente),
  };
  try {
    const response = await fetch(
      `${baseURL}/turno-for-pac/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getAllTurnosByPacPro(id_paciente, id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id_pro),
  };
  try {
    const response = await fetch(
      `${baseURL}/turnosbypac_pro_todos/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getTurnosByPacPro(id_paciente, id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id_pro),
  };
  try {
    const response = await fetch(
      `${baseURL}/turnosbypac_pro/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function confirmTurno(id_turno) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${baseURL}/confirmar-turno/${id_turno}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getTurnosById(id_turno) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/turnos/${id_turno}`,
      requestOptions
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}

export async function bajaTurno(id_turno, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/baja-turno/${id_turno}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function bajaTurnoById(id_turno) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${baseURL}/turnos/${id_turno}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function deleteBajaTurno(id_turno) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${baseURL}/baja-turno/${id_turno}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function viewTurno(id_pro, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/disponibilidad-turnos/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function editTurno(id_turno, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };

  try {
    const response = await fetch(
      `${baseURL}/editar-turno/${id_turno}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function AltaTurno(id_pro, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/alta-turno/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function pedirTurno(id_pro, datos) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  };
  try {
    const response = await fetch(
      `${baseURL}/pedir-turno/${id_pro}`,
      requestOptions
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getUltimoTurno(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/ultimo-turno/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getTurnoPendiente(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/turnos-pendientes/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getTurnoActivo(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/turnos-activos/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getProximoTurno(id_paciente) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/proximo-turno/${id_paciente}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}


//// DASHBOARD PROFESIONAL
export async function getUltimoTurnoPro(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/ultimo-turno_pro/${id_pro}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getTurnosConfirmar(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/turnos-confirmar/${id_pro}`,
      requestOptions
    );
    const data = await response.json(); 
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getProximaConsulta(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/proxima-consulta/${id_pro}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}

export async function getTurnosHoy(id_pro) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}/turnos-hoy/${id_pro}`,
      requestOptions
    );
    const data = await response.json();    
    return data;
  } catch (err) {
    alert("No se pudo conectar con el servidor");
    console.log("error: ", err);
  }
}
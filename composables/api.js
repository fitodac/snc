// ko = erronea
// ok = success

const make_request = async (url, body) => {
  const config = useRuntimeConfig();
  const main_url = config.public.ESTEVE_MAIN_URL;
  const base_url = config.public.ESTEVE_API_URL;
  const params = new URLSearchParams(body).toString();

  try {
    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: main_url + url, params }),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }

    return await response.text();
  } catch (error) {
    throw new Error("Error en la solicitud: " + error);
  }
};

const converStringToObject = (inputString) => {
  const keyValuePairs = inputString.split(";");
  const obj = {};

  for (let i = 0; i < keyValuePairs.length; i++) {
    const [key, value] = keyValuePairs[i].split("=");
    obj[key] = value;
  }

  return obj;
};

const login = async ({usu_email, usu_password}) => {
  const response = await make_request("Login.do?", {
    usu_email,
    usu_password,
  });

  if (response === "KO") {
    throw new Error(response);
  }

  return converStringToObject(response);
};

const register = async (user) => {
  const errors = {
    "KO": "Errónea",
    "KO##-1": "Error. Usuarios ya existe en WEB",
    "KO##-5": "Error. Usuario pendiente de activar",
    "KO##-6": "Error. Email formato incorrecto",
  };

  check_user_pending_confirmation(user.usu_email);
  check_free_email(user.usu_email);

  const response = await make_request("RegistroExterno.do?op=AEX&", {
    usu_email: user.usu_email,
    usu_password: user.usu_password,
    usu_nombre: user.usu_nombre,
    usu_ape1: user.usu_ape1,
    usu_ape2: user.usu_ape2,
    usu_codperfil: user.usu_codperfil,
    usu_codespecialidad: user.usu_codespecialidad,
    usu_codpais: user.usu_codpais,
    usu_codprovestado: user.usu_codprovestado,
    usu_codpoblacion: user.usu_codpoblacion,
    usu_ciudad: user.usu_ciudad,
    usu_direccion: user.usu_direccion,
    usu_cp: user.usu_cp,
    usu_telefono: user.usu_telefono,
    usu_dni: user.usu_dni,
    usu_empresa: user.usu_empresa,
    mailing: user.mailing ? "S" : "N",
    zon: "34",
    con: "299",
  });

  if (response in errors) {
    throw new Error(errors[response]);
  }

  return response;
};

const user_update = async (user) => {
  return await make_request("RegistroExterno.do?op=MEX&", {
    usu_codusuario: user.usu_codusuario,
    usu_email: user.usu_email,
    usu_nombre: user.usu_nombre,
    usu_ape1: user.usu_ape1,
    usu_ape2: user.usu_ape2,
    usu_codperfil: user.usu_codperfil ?? 'ME',
    usu_codespecialidad: user.usu_especialidad,
    usu_numcolegiado: user.usu_numcolegiado,
    usu_codpais: user.usu_pais,
    usu_codprovestado: user.usu_provincia,
    usu_codpoblacion: user.usu_poblacion,
    usu_ciudad: user.usu_ciudad,
    usu_direccion: user.usu_direccion,
    usu_cp: user.usu_cp,
    usu_telefono: user.usu_telefono,
    usu_dni: user.usu_dni,
    usu_empresa: user.usu_empresa,
    mailing: user.mailing ? "S" : "N",
  });
};



const change_password = async (usu_email, usu_password, usu_newpwd) => {
  const response = await make_request("Pwd.do?op=MCX&", {
    usu_email,
    usu_password,
    usu_newpwd,
  });

  if (response === "KO") {
    throw new Error(response);
  }
};

const resetPassword = async ({ usu_email }) => {
  const response = await make_request("Pwd.do?op=RCX&", {
    usu_email,
    zon: "34",
    con: "299",
  });

  if (response === "KO") {
    throw new Error(response);
  }
};

const check_free_email = async (usu_email) => {
  const response = await make_request("RegistroExterno.do?op=EEX&", {
    usu_email,
  });

  if (response === "KO") {
    throw new Error('Correo electrónico no disponible');
  }
};

const check_user_pending_confirmation = async (usu_email) => {
  const response = await make_request("RegistroExterno.do?op=UPC&", {
    usu_email,
  });

  if (response === "OK") {
    throw new Error("Usuario pendiente de confirmación");
  }
};

export { login, register, user_update, change_password, resetPassword };

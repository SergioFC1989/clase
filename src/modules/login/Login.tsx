"use client";
import { DocumentCard, Icon, Link, Text } from "@fluentui/react";

import Form from "@/lib/components/form/Form";

import { loginField } from "./fields/login.field";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { control, handleLogin, handleSubmit } = useLogin();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-3">
          <Icon iconName="Street" style={{ fontSize: 28, color: "white" }} />
        </div>
        <Text variant="xLargePlus">CLASE</Text>
        <Text variant="mediumPlus">Inicia sesión para acceder a tu dashboard</Text>
        <Link>¿No tienes una cuenta? Regístrate aquí</Link>
      </div>
      <DocumentCard className="w-full flex flex-col justify-center items-center p-4 border border-solid border-neutral-300 gap-2">
        <Form
          classNameGroupButtons="w-full flex flex-row justify-center gap-2"
          control={control}
          handleSubmit={handleSubmit}
          labelButtonSubmit="Iniciar sesión"
          listFields={loginField}
          onSubmit={handleLogin}
        />
        <Link>¿Olvidaste tu contraseña?</Link>
      </DocumentCard>
    </div>
  );
};

export default Login;

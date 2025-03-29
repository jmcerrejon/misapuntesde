---
title: Guía Stripe para webhook
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-03-15
category:
    - Developer
tags:
    - Stripe
    - Webhook
    - CLI
---

# Guía Stripe para webhook

![Stripe](/images/2025/03/stripe.jpg "Stripe")

Un webhook (también conocido como API inversa) es una herramienta que permite que un sistema o aplicación envíe notificaciones sobre eventos específicos a otro sistema o aplicación en tiempo real.

## Definir ruta en nuestra aplicación

En la aplicación se definirá la ruta donde el webhook va a escuchar por los eventos de stripe.

```python
@app.route('/webhook', methods=['POST'])
    def stripe_webhook():
        return webhook.webhook()
```

El método webhook será el que atienda los eventos stripe. Se debe implementar para atender aquellos eventos que se deseen. Se puede ver un ejemplo en: [https://stripe.com/docs/webhooks#webhook-endpoint-integration](https://stripe.com/docs/webhooks#webhook-endpoint-integration).

## Stripe CLI

Stripe CLI es una herramienta para desarrolladores que ayuda a crear, probar y gestionar la integración con Stripe directamente desde un terminal

### 1. Instalación de Stripe CLI:

Para instalar en Windows:

```
1. Descarga el archivo tar.gz windows más reciente desde https://github.com/stripe/stripe-cli/releases/latest
2. Descomprime el archivo stripe_X.X.X_windows_x86_64.zip
3. Ejecuta el archivo .exe descomprimido
```

Para instalar en GNU/Linux o macOS:

```
1. Descarga el archivo tar.gz linux más reciente desde https://github.com/stripe/stripe-cli/releases/latest
2. Descomprime el archivo: tar -xvf stripe_X.X.X_linux_x86_64.tar.gz
3. Añade ./stripe a tu ruta de ejecución.
```

### 2. Iniciar sesión en Stripe CLI

Utiliza el comando stripe login para autenticarte en Stripe CLI en tu navegador. Este comando genera un conjunto de claves restringidas para tu cuenta (una en modo de prueba y otra en modo activo) que son válidas durante 90 días.

```sh
$ stripe login
> Your pairing code is: glitz-boom-entice-quiet
> This pairing code verifies your authentication with Stripe.
> Press Enter to open the browser or visit <url> (^C to quit)
```

Opcionalmente, si no quieres usar un navegador, usa el indicador --interactive para autenticarte con una clave secreta de la API o con una clave restringida.

```sh
$ stripe login --interactive
```

Opcionalmente, puedes usar el indicador --api-key para especificar la clave secreta de tu API en línea cada vez que envíes una petición

```sh
$ stripe login --api-key <clave-api-stripe-test>
```

### 3. Envío de eventos desde Stripe CLI

El cliente de Stripe nos permite enviar eventos para simular las distintas operaciones que notifica Stripe.
En primer lugar se debe indicar la ruta en la que nuestra aplicación va a atender los eventos de Stripe

```sh
$ stripe listen --forward-to http://127.0.0.1:5000/webhook
```

Para obtener el listado de posibles eventos, ejecutar el siguiente comando:

```sh
$ stripe trigger
```

Para enviar un evento concreto, ejecutar el siguiente comando:

```sh
$ stripe trigger <nombre_evento>
```

### 4. Listado de eventos necesarios

Estudiando el webhook, se extraen que los eventos más comunes cuando se efectúa un pago son (de abajo a arriba):

```
transfer.created
payment_intent.succeeded
charge.succeeded
charge.pending
payment_intent.processing
payment_intent.created
payment_intent.requires_action
customer.subscription.updated
invoice.created
```

Otros eventos interesantes:

```
customer.updated
customer.subscription.deleted
customer.subscription.updated
invoice.updated
invoice.voided
invoice.paid
invoice.finalized
subscription.triggered
invoice.draft.paid
```

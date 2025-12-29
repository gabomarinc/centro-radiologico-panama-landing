# Centro de Radiología Metropolitano - Panamá

Sitio web promocional para Centro de Radiología Metropolitano con descuento especial del 20% en estudios diagnósticos.

## 🚀 Tecnologías

- **React 19** con TypeScript
- **Vite** para desarrollo y build
- **Tailwind CSS** para estilos
- **Lucide React** para iconos

## 💻 Desarrollo Local

**Prerequisitos:** Node.js 16+

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables de entorno (opcional):
   ```bash
   cp .env.local.example .env.local
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000)

## 📦 Build de Producción

```bash
npm run build
```

El build se generará en la carpeta `dist/`.

Para previsualizar el build:
```bash
npm run preview
```

## 🌐 Despliegue en Vercel

### Opción 1: Deploy desde GitHub

1. Sube el código a GitHub
2. Ve a [vercel.com](https://vercel.com) e importa tu repositorio
3. Vercel detectará automáticamente la configuración de Vite
4. Haz clic en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
npm install -g vercel
vercel
```

## 📝 Estructura del Proyecto

```
.
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── PromoHero.tsx
│   ├── Services.tsx
│   ├── Benefits.tsx
│   ├── Process.tsx
│   ├── Locations.tsx
│   ├── Testimonials.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── FloatingCTA.tsx
├── img/                # Imágenes y assets
├── App.tsx             # Componente principal
├── constants.tsx       # Constantes y datos
├── types.ts            # Definiciones TypeScript
└── index.html          # HTML principal
```

## 🎨 Paleta de Colores

- **Morado Principal:** `#6C569E`
- **Lavanda:** `#F1ECF9`
- **Verde CTA:** `#4AAC3D`

## 📞 Contacto

**Teléfono:** 263-5555

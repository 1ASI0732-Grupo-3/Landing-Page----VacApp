# 🐄 VacApp - Landing Page

Una landing page moderna y responsiva para VacApp, la plataforma integral de gestión ganadera diseñada específicamente para ganaderos y veterinarios en Perú.

## 🌟 Características Principales

### 🎨 **Diseño Minimalista y Moderno**
- **Glassmorphism**: Efectos de vidrio translúcido en todos los componentes
- **Gradientes Suaves**: Paleta de colores forest-green, lime-neon y light-gray
- **Animaciones**: Hover effects, transiciones suaves y micro-interacciones
- **Responsive Design**: Perfectamente adaptado para móvil, tablet y desktop

### 🔐 **Sistema de Autenticación Integrado**
- Páginas dedicadas para Login y Registro con diseño glassmorphism
- Integración con la aplicación web externa de VacApp
- Botones de navegación en el header para acceso rápido
- Redirección automática a la plataforma principal

### 🌍 **Internacionalización (i18n) Completa**
- **3 Idiomas Soportados**: Español, Inglés y Chino (Mandarín)
- **Selector Interactivo**: Dropdown elegante con banderas y transiciones
- **Traducciones Completas**: Todos los componentes y textos localizados
- **Persistencia**: El idioma seleccionado se mantiene entre sesiones

### 📱 **Componentes Interactivos**
- **Hero Section**: Título dinámico con call-to-action prominente
- **Features**: Características clave con iconos y descripciones atractivas
- **About Us**: Misión, visión y valores de VacApp
- **Testimonials**: Opiniones reales de usuarios con sistema de ratings
- **Pricing**: Planes de suscripción con comparación de características
- **Mobile App**: Sección de descarga para iOS y Android
- **Call to Action**: Sección de conversión optimizada
- **Footer**: Enlaces organizados y información de contacto

## 🛠 **Stack Tecnológico**

### **Frontend**
- **React 19.1.0** - Biblioteca de UI con los últimos hooks y características
- **TypeScript** - Tipado estático para mejor desarrollo y mantenimiento
- **Vite** - Herramienta de build rápida con Hot Module Replacement
- **Tailwind CSS 4.1.5** - Framework de CSS utility-first para diseño responsivo

### **Routing y Navegación**
- **React Router DOM** - Navegación del lado del cliente para SPA
- **Rutas Configuradas**: Homepage, Login, Register

### **Internacionalización**
- **react-i18next** - Sistema completo de i18n con carga dinámica
- **Detección Automática**: Detección del idioma del navegador
- **Namespace Organization**: Traducciones organizadas por componentes

### **UI/UX**
- **Lucide React** - Iconografía moderna y consistente
- **Material-UI** (selectivo) - Componentes específicos para interacciones avanzadas
- **CSS Custom Properties** - Variables CSS para theming consistente

### **Desarrollo**
- **ESLint** - Linting configurado para React y TypeScript
- **PostCSS** - Procesamiento de CSS con autoprefixer

## 🚀 **Instalación y Configuración**

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn

### **Pasos de Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/1ASI0732-Grupo-3/Landing-Page----VacApp.git

# Navegar al directorio del proyecto
cd Landing-Page----VacApp

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# El proyecto estará disponible en http://localhost:5173
```

### **Scripts Disponibles**

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview

# Linting del código
npm run lint
```

## 📁 **Estructura del Proyecto**

```
src/
├── components/          # Componentes React reutilizables
│   ├── Hero.tsx        # Sección principal con CTA
│   ├── Features.tsx    # Características del producto
│   ├── AboutUs.tsx     # Información de la empresa
│   ├── Testimonials.tsx # Opiniones de usuarios
│   ├── Prices.tsx      # Planes de suscripción
│   ├── MobileApp.tsx   # Descarga de aplicaciones móviles
│   ├── CallToAction.tsx # Sección de conversión
│   ├── Navbar.tsx      # Navegación principal
│   ├── Footer.tsx      # Pie de página
│   ├── LanguageSelector.tsx # Selector de idiomas
│   └── TermsModal.tsx  # Modal de términos y condiciones
├── i18n/               # Configuración de internacionalización
│   ├── en.json         # Traducciones en inglés
│   ├── es.json         # Traducciones en español
│   └── zh.json         # Traducciones en chino
├── assets/             # Recursos estáticos
│   ├── hero.webp       # Imagen principal
│   ├── farmer1.webp    # Imágenes de testimoniales
│   ├── mobile_app.webp # Mockup de aplicación móvil
│   ├── appstore.webp   # Badge de App Store
│   └── googleplay.webp # Badge de Google Play
├── App.tsx             # Componente principal con routing
├── main.tsx            # Punto de entrada de la aplicación
├── i18n.ts             # Configuración de react-i18next
└── index.css           # Estilos globales y variables CSS
```

## 🌐 **Routing**

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | HomePage | Landing page principal con todas las secciones |
| `/login` | Login | Página de inicio de sesión (redirige a app externa) |
| `/register` | Register | Página de registro (redirige a app externa) |

## 🎨 **Paleta de Colores**

```css
:root {
  --forest-green: #2d5016;
  --lime-neon: #32cd32;
  --light-gray: #f8f9fa;
  --white: #ffffff;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}
```

## 🌍 **Internacionalización**

### **Idiomas Soportados**
- **Español (es)**: Idioma principal - mercado objetivo en Perú
- **English (en)**: Inglés internacional - expansión global
- **中文 (zh)**: Chino mandarín - mercados asiáticos

### **Configuración i18n**
- Detección automática del idioma del navegador
- Fallback a español como idioma predeterminado
- Traduciones organizadas por namespace de componentes
- Selector visual con banderas para cambio de idioma

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### **Optimizaciones Móviles**
- Navegación tipo hamburger menu
- Imágenes optimizadas en formato WebP
- Touch-friendly buttons y interactive elements
- Texto y espaciados adaptados para pantallas pequeñas

## 🔧 **Configuración de Desarrollo**

### **Variables de Entorno**
Crea un archivo `.env` en la raíz del proyecto:

```env
# URL de la aplicación web externa para redirección
VITE_WEBAPP_URL=https://app.vacapp.com

# Configuración de i18n
VITE_DEFAULT_LANGUAGE=es
VITE_SUPPORTED_LANGUAGES=es,en,zh
```

### **ESLint y TypeScript**
El proyecto incluye configuración estricta de ESLint y TypeScript para:
- Detección temprana de errores
- Consistencia en el código
- Mejores prácticas de React
- Type safety completo

## 🚀 **Deployment**

### **Build para Producción**
```bash
npm run build
```

### **Plataformas Recomendadas**
- **Vercel**: Deployment automático desde GitHub
- **Netlify**: CI/CD integrado con preview deployments
- **AWS S3 + CloudFront**: Para mayor control y escalabilidad

### **Optimizaciones de Producción**
- Tree shaking automático
- Minificación de CSS y JavaScript
- Optimización de imágenes WebP
- Code splitting por rutas
- Lazy loading de componentes

## 🤝 **Contribución**

### **Proceso de Desarrollo**
1. Fork el repositorio
2. Crear una rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear un Pull Request

### **Convenciones**
- Usar TypeScript para todos los componentes nuevos
- Seguir la estructura de carpetas establecida
- Agregar traducciones para los 3 idiomas soportados
- Mantener responsive design en todas las nuevas características
- Escribir commits descriptivos en español

## 📄 **Licencia**

Este proyecto es privado y pertenece a VacApp. Todos los derechos reservados.

## 👥 **Equipo**

Desarrollado por el **Grupo 3 - 1ASI0732** para VacApp.

---

**VacApp** - Transformando la gestión ganadera en Perú 🇵🇪

# UrbanVue3D

![UrbanVue3D](app-images\app.png)  
**An interactive 3D visualization platform for rooftop segmentation and building height exploration in Ben Guerir City, Morocco.**

## 🚀 About UrbanVue3D
UrbanVue3D is a full-stack web application that enables users to visualize and analyze urban rooftop segmentation and building heights in **Ben Guerir City, Morocco**. This project integrates **Django, PostgreSQL, and React** to provide an interactive 3D urban exploration experience.

## 🔥 Key Features
- **3D Rooftop Segmentation**: Visualize segmented rooftops derived from advanced deep learning models.
- **Building Height Estimation**: Display accurate building height data for solar energy planning and urban development.
- **Interactive Map & Controls**: Explore the city dynamically with zoom, pan, and layer toggling.
- **Seamless Backend & Frontend Integration**: Powered by **Django (REST API)**, **PostgreSQL**, and **React (Three.js for 3D visualization)**.
- **Optimized for Performance**: Efficient database queries and smooth front-end rendering.

## 🛠️ Tech Stack
- **Frontend**: React, Three.js, Leaflet.js, TailwindCSS
- **Backend**: Django, Django REST Framework
- **Database**: PostgreSQL (PostGIS for geospatial data)
- **Deployment**: Docker, Nginx, AWS/GCP (Optional)

## 7. Detailed Overview of UrbanVue3D Application Pages

### 7.1. Dashboard
![Dashboard](app-images\app1.png)

### Overview
The **UrbanVue3D Dashboard** is a comprehensive web application built using **React.js, Django, Leaflet, and Mapbox**. It serves as the primary interface for visualizing **3D urban models** and managing various aspects of the project.

### Key Interface Components

#### 1. Sidebar Navigation
- Provides quick access to key sections such as **Leaflet, Mapbox, Papers, Applications, and About GEP**.
- The **"About Project"** section includes a documentation link for additional insights, particularly useful for new users.

#### 2. Dashboard Cards
- Offers a summary of key urban metrics:
  - **Buildings**: Total count and percentage growth.
  - **Total Roof Area**: Available space for rooftop solar installations.
  - **Population**: Size and growth trends.
  - **Total City Area**: Overall geographical footprint.
- These insights help urban planners evaluate **solar potential** based on **building density, rooftop availability, and population distribution**.

#### 3. Map Visualization
- **Mapbox Integration** powers an interactive map with multiple layers for **Ben Guerir City, Rehamna Province, and Marrakesh-Safi Region**, using color-coded distinctions.
- **Features**:
  - **Zoom and Pan** for detailed exploration.
  - **Map Legend** to clarify region demarcations.

#### 4. Data Interaction and Summary
- Integrates **geospatial data** for in-depth urban exploration.
- Use cases include:
  - Assessing **rooftop solar potential** based on total available area.
  - Analyzing **building counts and population data** for energy distribution planning.

---

## 7.2. Leaflet Page
![leaflet](app-images\app2.png)


### Components and Features

#### 1. Roofs Visualization
- Displays **rooftop extractions** from high-resolution **satellite imagery**.
- Data is stored in a **PostgreSQL (PostGIS) database**, containing:
  - **Longitude and Latitude** of building centroids.
  - **Rooftop Area** (square meters).
  - **Building Height**, estimated via the **SENDEMHEIGHT model**.

#### 2. Basemaps
- Allows switching between multiple basemap styles:
  - **Satellite Imagery**: Real-world landscape representation.
  - **Street Map**: Roads and neighborhood details.
  - **Topographic Map**: Elevation features.
  - **Light/Dark Maps**: Minimalist styles for focused analysis.

#### 3. Data Integration from PostgreSQL Database
- Ensures real-time updates for building and rooftop information.
- **PostGIS** enables spatial queries, including:
  - **Computing rooftop area**.
  - **Determining structure proximity**.

#### 4. Interactive Features
- **Pan & Zoom**: Navigate through different city regions.
- **Click-to-View Details**: Retrieve building attributes dynamically.
- **Filtering Options**: Filter buildings based on **height, rooftop area**, etc.

#### 5. Purpose and Use Cases
- **Urban Planners**: Evaluate rooftop availability.
- **Energy Experts**: Assess PV suitability and potential shading.
- **Community Engagement**: Encourage local renewable energy participation.

---

## 7.3. Mapbox Page
![mapbox](app-images\app3.png)

### Overview
The **Mapbox page** provides an immersive **3D urban visualization**, built using **Mapbox GL JS**. This page enhances understanding of **urban form, shading effects, and solar potential**.

### Components and Features

#### 1. 3D Buildings Visualization
- Displays **realistic elevation** for all buildings.
- Heights retrieved from the **Mapbox database**, integrating results from **SENDEMHEIGHT**.
- Helps identify **solar exposure and potential shading**.

#### 2. Building Height Information
- **Color-coded height categories**:
  - **Low Buildings** → Light Green.
  - **Medium Height Buildings** → Orange.
  - **Tall Buildings** → Deep Red.
- Facilitates quick **visual height assessment**.

#### 3. Basemaps
- Different styles for varying analysis needs:
  - **Satellite Imagery**: Real-world surroundings.
  - **Streets Map**: Infrastructure and road networks.
  - **Terrain Map**: Elevation context.
  - **Light/Dark Maps**: Minimal distractions.

#### 4. Interactive Features
- **Pan, Rotate, Zoom**: View from different angles.
- **Click on Buildings**: Retrieve **height and rooftop area**.
- **Perspective Views**: Adjust camera angles for **ground-level** or **bird’s-eye views**.

#### 5. Purpose and Use Cases
- **Solar Energy Assessment**: Identify optimal rooftops for PV installations.
- **Urban Planning**: Understand **height distribution**.
- **Shading Analysis**: Evaluate **building height impact** on solar exposure.

#### 6. Data Integration
- Real-time **height data from the Mapbox database**.
- Uses **Mapbox API & WebGL** for smooth rendering.
- Direct integration with **SENDEMHEIGHT** ensures accuracy.

---

## 7.4. Papers Page
![papers](app-images\app4.png)

### Overview
The **Papers page** acts as a **research portfolio**, showcasing **publications, methodologies, and urban energy studies** related to UrbanVue3D.

### Components and Features

#### 1. Project Listings
- Displays **research projects** with:
  - **Title & Scope**.
  - **Objectives, methodology, and findings**.

#### 2. Publications
- Lists **conference papers, journal articles**, and other works.
- Details include:
  - **Authors**.
  - **Publication Venue**.
  - **Abstract Summary**.
  - **Full-Text Links** (if available).

#### 3. Interactive Filtering and Search
- Enables users to quickly find relevant research by:
  - **Publication year**.
  - **Topic category**.
  - **Author names**.

#### 4. Research Categories
- Papers are grouped into:
  - **Satellite Image Super-Resolution (GS-SRGAN)**.
  - **Roof Segmentation**.
  - **Building Height Estimation (SENDEMHEIGHT)**.
  - **3D Visualization**.
  - **Urban Solar Potential Analysis**.

#### 5. User Profile Information
- Showcases **author credentials**:
  - **Name, affiliation, expertise, and contact info**.
  - Encourages **collaboration and networking**.

#### 6. Purpose and Use Cases
- **Knowledge Sharing**: Offers insights into **urban geospatial research**.
- **Academic Collaboration**: Helps researchers **connect and exchange ideas**.
- **Urban Energy Innovation**: Supports **solar energy studies and city planning**.

---



## 📦 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Python 3.9+
- Node.js & npm
- PostgreSQL (with PostGIS extension)
- Docker (optional for deployment)

### Backend Setup (Django)
```sh
# Clone the repository
git clone https://github.com/saad1902/UrbanVue3D.git
cd UrbanVue3D/api-server-django

# Create a virtual environment & activate it
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations & run server
python manage.py migrate
python manage.py runserver
```

### Frontend Setup (React)
```sh
cd ../react-ui
npm install
npm start
```

## 🚀 Usage
1. Open your browser and go to `http://localhost:3000`
2. Explore the **3D rooftop segmentation** and **building height data** interactively
3. Use the filters and layers to toggle different visualizations

## 🌍 Deployment
- **Docker**: Use `docker-compose up --build` for full-stack deployment.
- **Cloud**: Deploy backend on AWS/GCP and frontend on Vercel/Netlify.

## 🛠️ Future Enhancements
- Integrate **real-time solar potential analysis** for PV panel placement.
- Enhance UI/UX for better user interaction.
- Add **historical change tracking** for urban planning studies.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## 📄 License
This project is licensed under the **MIT License**.

## 📫 Contact
For questions or collaboration, reach out via **[LinkedIn](https://www.linkedin.com/in/saad-farah-gis/)** or 
**[GitHub 1](https://github.com/saadfrh)** || **[GitHub 2](https://github.com/farah1902)**.


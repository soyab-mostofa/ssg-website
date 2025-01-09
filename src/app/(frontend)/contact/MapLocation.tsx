'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { Icon } from 'leaflet'

const skater = new Icon({
  iconUrl: '/logo.png',
  iconSize: [50, 50],
})
const DhakaMap = () => {
  // Dhaka coordinates
  return (
    <div className="h-96 w-full overflow-hidden rounded-lg shadow-lg">
      <MapContainer
        className="h-full"
        center={[23.88733117415661, 90.38951472552638]}
        zoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          // className="h-full"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={skater}
          title="Shin Shin Group"
          position={[23.88733117415661, 90.38951472552638]}
        >
          <Tooltip className="bg-primary-blue-300/35" permanent>
            Shin Shin Group
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default DhakaMap

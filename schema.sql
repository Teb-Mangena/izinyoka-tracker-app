-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) CHECK (role IN ('citizen', 'worker', 'admin')) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Meters
CREATE TABLE meters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meter_number VARCHAR(50) UNIQUE NOT NULL,
  household_address TEXT,
  lat DECIMAL(9,6),
  lon DECIMAL(9,6),
  linked_user UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Telemetry
CREATE TABLE telemetry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meter_id UUID REFERENCES meters(id) ON DELETE CASCADE,
  consumption_kwh DECIMAL(10,2) NOT NULL,
  tamper_flags TEXT,
  recorded_at TIMESTAMP DEFAULT NOW()
);

-- Incidents
CREATE TABLE incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  meter_id UUID REFERENCES meters(id) ON DELETE SET NULL,
  reporter_id UUID REFERENCES users(id) ON DELETE SET NULL,
  description TEXT,
  media_url TEXT,
  lat DECIMAL(9,6),
  lon DECIMAL(9,6),
  status VARCHAR(20) CHECK (status IN ('Pending', 'Assigned', 'Resolved', 'False Alarm')) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Alerts
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type VARCHAR(50),
  message TEXT NOT NULL,
  meter_id UUID REFERENCES meters(id) ON DELETE SET NULL,
  lat DECIMAL(9,6),
  lon DECIMAL(9,6),
  severity VARCHAR(20) CHECK (severity IN ('low', 'medium', 'high')) DEFAULT 'low',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Audit Logs
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID REFERENCES users(id),
  action VARCHAR(100),
  target_id UUID,
  target_type VARCHAR(50),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

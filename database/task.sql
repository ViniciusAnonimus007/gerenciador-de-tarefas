CREATE TABLE Task (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    taskID VARCHAR(36) UNIQUE NOT NULL,
    user_id BIGINT NOT NULL,
    title varchar(255) NOT NULL,
    description text,
    importance ENUM('low', 'mid', 'high') DEFAULT 'mid',
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES _User(id) ON DELETE CASCADE
);
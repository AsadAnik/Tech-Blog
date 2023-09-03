import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

/**
 * ==== Setting Up All Neccesary Middlwares ====
 * @returns 
 */
export default function setupMiddlewares() {
    const midddlewares = [
        morgan('dev'),
        cors(),
        express.json()
    ];

    return midddlewares;
}
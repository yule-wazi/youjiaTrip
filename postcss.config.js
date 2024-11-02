import { defineConfig } from 'vite';
import postcss from 'postcss';
import pxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                pxToViewport({
                    viewportWidth: 375
                }),
            ]
        }
    }
});
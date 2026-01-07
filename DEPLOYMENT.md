# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Remix configuration
   - Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Pre-Deployment Checklist

✅ All dependencies installed (`npm install`)  
✅ Build succeeds locally (`npm run build`)  
✅ No TypeScript errors (`npm run typecheck`)  
✅ Environment variables configured (if any)  
✅ `.gitignore` includes `node_modules`, `build`, `.env`  

## Build Configuration

The project is configured with:
- **Framework**: Remix (auto-detected by Vercel)
- **Build Command**: `npm run build`
- **Output Directory**: `build/client`
- **Install Command**: `npm install`
- **Node Version**: >=20.0.0

## Environment Variables

Currently, no environment variables are required. If you add any:

1. Create `.env` file locally (already in `.gitignore`)
2. Add variables to Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add your variables
   - Redeploy

## Post-Deployment

After successful deployment:

1. ✅ Test all pages
2. ✅ Verify navigation works
3. ✅ Check contact form
4. ✅ Test mobile responsiveness
5. ✅ Verify colors match design system

## Custom Domain

To add a custom domain:

1. Go to Vercel Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (usually 24-48 hours)

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules build .cache
npm install
npm run build
```

### Module Not Found

```bash
# Reinstall dependencies
npm install
```

### TypeScript Errors

```bash
# Check for errors
npm run typecheck
```

## Performance Optimization

The site is already optimized with:
- ✅ Server-side rendering (SSR)
- ✅ Code splitting
- ✅ Optimized images
- ✅ Minimal CSS
- ✅ Fast page loads

## Monitoring

After deployment, monitor:
- Page load times
- Error rates
- User analytics (if configured)

## Support

For deployment issues:
- Check [Remix Docs](https://remix.run/docs)
- Check [Vercel Docs](https://vercel.com/docs)
- Review build logs in Vercel dashboard


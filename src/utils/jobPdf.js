const JOB_PDF_BASE_PATH = '/job-descriptions';

/**
 * Validates and returns a safe PDF filename (no path traversal).
 */
function sanitizePdfFilename(filename) {
  if (!filename || typeof filename !== 'string') return null;

  const trimmed = filename.trim();
  if (!trimmed.toLowerCase().endsWith('.pdf')) return null;
  if (/[/\\]|\.\./.test(trimmed)) return null;

  return trimmed;
}

/**
 * Builds the public URL for a job description PDF.
 */
export function getJobPdfUrl(pdfFilename) {
  const safe = sanitizePdfFilename(pdfFilename);
  if (!safe) return null;

  return `${JOB_PDF_BASE_PATH}/${encodeURIComponent(safe)}`;
}

async function verifyPdfExists(url) {
  const response = await fetch(url, { method: 'HEAD' });
  return response.ok;
}

/**
 * Opens the job PDF in a new browser tab (does not download).
 */
export async function openJobPdf(pdfFilename) {
  const url = getJobPdfUrl(pdfFilename);
  if (!url) {
    window.alert('Job description is not available for this position.');
    return;
  }

  try {
    const exists = await verifyPdfExists(url);
    if (!exists) {
      window.alert(
        'Job description PDF could not be found. Please try again later or contact the hiring team.',
      );
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  } catch {
    window.alert(
      'Unable to open job description. Please try again later or contact the hiring team.',
    );
  }
}

/**
 * Downloads the job PDF when the user explicitly chooses to.
 */
export async function downloadJobPdf(pdfFilename) {
  const url = getJobPdfUrl(pdfFilename);
  if (!url) {
    window.alert('Job description is not available for this position.');
    return;
  }

  try {
    const exists = await verifyPdfExists(url);
    if (!exists) {
      window.alert(
        'Job description PDF could not be found. Please try again later or contact the hiring team.',
      );
      return;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('Download failed');

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = sanitizePdfFilename(pdfFilename) || 'job-description.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch {
    window.alert(
      'Unable to download job description. Please try again later or contact the hiring team.',
    );
  }
}

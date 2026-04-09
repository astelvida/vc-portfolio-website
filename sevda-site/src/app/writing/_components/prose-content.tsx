/**
 * Renders sanitized HTML content from Substack RSS feed.
 * Content is pre-sanitized in lib/substack.ts (scripts, iframes, event handlers stripped).
 * Only used with trusted first-party content from the user's own Substack publication.
 */
export function ProseContent({ html }: { html: string }) {
  return (
    <div
      className="
        max-w-[700px]
        [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-[-0.04em] [&_h1]:text-text [&_h1]:mt-12 [&_h1]:mb-4
        [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.04em] [&_h2]:text-text [&_h2]:mt-10 [&_h2]:mb-4
        [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-[-0.04em] [&_h3]:text-text [&_h3]:mt-8 [&_h3]:mb-3
        [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-bold [&_h4]:tracking-[-0.04em] [&_h4]:text-text [&_h4]:mt-6 [&_h4]:mb-2
        [&_p]:font-body [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:text-text-muted [&_p]:mb-6
        [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent/80
        [&_strong]:text-text [&_strong]:font-medium
        [&_em]:italic
        [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-text-muted [&_blockquote]:my-6
        [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-border-subtle [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
        [&_pre]:bg-surface [&_pre]:border [&_pre]:border-border [&_pre]:rounded-[10px] [&_pre]:p-5 [&_pre]:overflow-x-auto [&_pre]:my-6
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[13px]
        [&_img]:rounded-[10px] [&_img]:my-6 [&_img]:w-full [&_img]:h-auto
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
        [&_li]:font-body [&_li]:text-[15px] [&_li]:text-text-muted [&_li]:leading-[1.7]
        [&_hr]:border-border [&_hr]:my-10
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
        [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:font-mono [&_th]:text-[11px] [&_th]:font-semibold [&_th]:text-text [&_th]:bg-border-subtle
        [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:font-body [&_td]:text-sm [&_td]:text-text-muted
        [&_figure]:my-6
        [&_figcaption]:font-mono [&_figcaption]:text-[11px] [&_figcaption]:text-text-faint [&_figcaption]:mt-2 [&_figcaption]:text-center
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

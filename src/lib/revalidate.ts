import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from "payload";

/**
 * Frontend pages are statically rendered or ISR cached, so an edit in the
 * admin panel needs to trigger on-demand cache revalidation.
 *
 * `revalidatePath("/", "layout")` clears the route tree beneath the root layout
 * so updates take effect immediately on local and production.
 */
async function revalidateSite(scope: string) {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/", "layout");
  } catch (err) {
    // Hooks also fire outside Next.js server context (seed scripts, migrations)
    console.warn(
      `[revalidate] ${scope}: skipped (no Next.js cache context):`,
      err instanceof Error ? err.message : err,
    );
  }
}

export const revalidateCollection: CollectionAfterChangeHook = async ({
  doc,
  collection,
}) => {
  await revalidateSite(collection.slug);
  return doc;
};

export const revalidateCollectionDelete: CollectionAfterDeleteHook = async ({
  doc,
  collection,
}) => {
  await revalidateSite(`${collection.slug}:delete`);
  return doc;
};

export const revalidateGlobal: GlobalAfterChangeHook = async ({
  doc,
  global,
}) => {
  await revalidateSite(global.slug);
  return doc;
};

/** Spread into a collection config: `...revalidateHooks,` */
export const revalidateHooks = {
  hooks: {
    afterChange: [revalidateCollection],
    afterDelete: [revalidateCollectionDelete],
  },
};

/** Spread into a global config: `...revalidateGlobalHooks,` */
export const revalidateGlobalHooks = {
  hooks: {
    afterChange: [revalidateGlobal],
  },
};
